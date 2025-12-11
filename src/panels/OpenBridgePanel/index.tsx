import { AzimuthThruster, Topbar } from "../../components";
import { useSimulatedData } from "../../hooks";

export function OpenBridgePanel() {
  const data = useSimulatedData();

  return (
    <div style={{ padding: 16 }}>
      <Topbar />

      <div style={{ display: "flex", gap: 24 }}>
        <AzimuthThruster angle={data.thrustAngle} thrust={data.thrust} />
      </div>
    </div>
  );
}
