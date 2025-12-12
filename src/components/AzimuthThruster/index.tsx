import { InstrumentState } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/types";
import { AdviceType } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/watch/advice";

interface IAzimuthThrusterProps {
  angle: number;
  thrust: number;
}

const AzimuthThruster = ({ angle, thrust }: IAzimuthThrusterProps) => {
  return (
    <div className="obc-component-size-regular">
      <div className="wrapper" style={{ width: "256px", height: "256px" }}>
        <obc-azimuth-thruster
          angle={angle}
          thrust={thrust}
          state={InstrumentState.inCommand}
          autoAtThrustSetpointDeadband={1}
          autoAtAngleSetpointDeadband={2}
          thrustSetpointAtZeroDeadband={0.1}
          thrustSetpoint={thrust + 10}
          angleSetpoint={angle + 10}
          angleAdvices={[
            {
              minAngle: 20,
              maxAngle: 50,
              type: AdviceType.advice,
              hinted: true,
            },
            {
              minAngle: 60,
              maxAngle: 100,
              type: AdviceType.caution,
              hinted: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AzimuthThruster;
