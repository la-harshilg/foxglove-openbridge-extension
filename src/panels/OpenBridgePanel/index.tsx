import { PanelExtensionContext } from "@foxglove/extension";
import { useEffect } from "react";

import { AzimuthThruster, Topbar } from "../../components";
import { useSimulatedData } from "../../hooks";
import useFoxGloveStimulated from "../../hooks/useFoxGloveStimulated";

interface IOpenBridgePanelProps {
  context: PanelExtensionContext;
}

export default function OpenBridgePanel({ context }: IOpenBridgePanelProps) {
  const sim = useSimulatedData();
  const data = useFoxGloveStimulated(context, sim);

  useEffect(() => {
    context.setDefaultPanelTitle("Open Bridge Panel");
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Topbar />

      <div style={{ display: "flex", gap: 24 }}>
        <AzimuthThruster angle={data.thrustAngle} thrust={data.thrust} />
      </div>
    </div>
  );
}
