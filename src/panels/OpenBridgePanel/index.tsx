import { PanelExtensionContext } from "@foxglove/extension";
import { useEffect } from "react";

import { AzimuthThruster, Topbar } from "../../components";
import { useSimulatedData } from "../../hooks";

interface IOpenBridgePanelProps {
  context: PanelExtensionContext;
}

export default function OpenBridgePanel({ context }: IOpenBridgePanelProps) {
  const sim = useSimulatedData();

  useEffect(() => {
    context.setDefaultPanelTitle("Open Bridge Panel");
  }, []);

  return (
    <html data-obc-theme="day">
      <div style={{ padding: 16 }} className="obc-component-size-regular">
        <Topbar />

        <div style={{ display: "flex", gap: 24 }} className="obc-component-size-regular">
          <AzimuthThruster angle={sim.thrustAngle} thrust={sim.thrust} />
        </div>
      </div>
    </html>
  );
}
