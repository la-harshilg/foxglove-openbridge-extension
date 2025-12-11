import { useEffect, useState } from "react";

interface StimulatedDataType {
    thrustAngle: number;
    thrust: number;
}

export default function useSimulatedData(): StimulatedDataType {
  const [data, setData] = useState<StimulatedDataType>({
    thrust: 0,
    thrustAngle: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        thrustAngle: (Math.sin(Date.now() / 1500) * 45),
        thrust: 800 + Math.sin(Date.now() / 1200) * 150,
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return data;
}
