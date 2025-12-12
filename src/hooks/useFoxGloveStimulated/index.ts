import { PanelExtensionContext } from "@foxglove/extension";
import { useEffect, useState } from "react";

import { StimulatedDataType } from "../useStimulatedData";

export default function useFoxgloveOrSim(context: PanelExtensionContext, sim: StimulatedDataType) {
  const [data, setData] = useState(sim);

  useEffect(() => {
    try {
      context.subscribe([{ topic: "/thruster/angle" }, { topic: "/thruster/rpm" }]);
    } catch (error) {
      console.error("Subscription error:", error);
    }

    context.onRender = (state, done) => {
      const frame = state.currentFrame;
      if (!frame || !Array.isArray(frame) || frame.length === 0) {
        done();
        return;
      }
      if (frame) {
        const next = { ...data };

        for (const msg of frame) {
          switch (msg.topic) {
            case "/thruster/angle":
              next.thrustAngle = (msg.message as { value: number }).value ?? next.thrustAngle;
              break;
            case "/thruster/rpm":
              next.thrust = (msg.message as { value: number }).value ?? next.thrust;
              break;
          }
        }

        setData(next);
      }

      done();
    };
  }, [context, data]);

  return data;
}
