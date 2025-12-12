import { useEffect, useRef, useState } from "react";
import { PanelExtensionContext, MessageEvent } from "@foxglove/extension";
import { StimulatedDataType } from "../useStimulatedData";

// safely extract a numeric value from any message shape
function getNumber(message: unknown, fallback: number): number {
  if (typeof message === "number") return message;

  if (typeof message === "string") {
    const num = Number(message);
    return Number.isFinite(num) ? num : fallback;
  }

  if (typeof message === "object" && message !== null) {
    // common patterns: {value}, {data}, {rpm}, {angle}
    const obj = message as any;

    if (typeof obj.value === "number") return obj.value;
    if (typeof obj.data === "number") return obj.data;
    if (typeof obj.angle === "number") return obj.angle;
    if (typeof obj.rpm === "number") return obj.rpm;
    if (typeof obj.thrust === "number") return obj.thrust;

    // most ROS Float32 messages: {data: 123}
    if (obj.data && typeof obj.data === "number") return obj.data;
  }

  return fallback;
}

export default function useFoxgloveOrSim(
  context: PanelExtensionContext,
  sim: StimulatedDataType
) {
  const [data, setData] = useState(sim);

  // keeps latest state for onRender without re-binding
  const dataRef = useRef(sim);
  dataRef.current = data;

  useEffect(() => {
    // subscribe once
    context.subscribe([
      { topic: "/thruster/angle" },
      { topic: "/thruster/rpm" },
    ]);

    // stable onRender handler
    context.onRender = (renderState, done: () => void) => {
      const frame = renderState.currentFrame as MessageEvent<any>[] | undefined;

      if (frame) {
        const next = { ...dataRef.current };

        for (const event of frame) {
          const payload = event.message;

          if (event.topic === "/thruster/angle") {
            next.thrustAngle = getNumber(payload, next.thrustAngle);
          }

          if (event.topic === "/thruster/rpm") {
            next.thrust = getNumber(payload, next.thrust);
          }
        }

        // only update state if changed
        if (
          next.thrustAngle !== dataRef.current.thrustAngle ||
          next.thrust !== dataRef.current.thrust
        ) {
          setData(next);
        }
      }

      done();
    };
    return () => {
      context.onRender = undefined;
    };
  }, [context]);

  return data;
}
