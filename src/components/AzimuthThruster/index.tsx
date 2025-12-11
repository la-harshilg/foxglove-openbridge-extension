interface IAzimuthThrusterProps {
  angle: number;
  thrust: number;
}

const AzimuthThruster = ({ angle, thrust }: IAzimuthThrusterProps) => {
  return (
    <div className="obc-component-size-regular">
      <div className="wrapper" style={{ width: "512px", height: "512px" }}>
        <obc-azimuth-thruster angle={angle} thrust={thrust} />
      </div>
    </div>
  );
};

export default AzimuthThruster;
