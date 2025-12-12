import { ObcAlertButton } from "@oicl/openbridge-webcomponents/dist/components/alert-button/alert-button";
import { ObcClock } from "@oicl/openbridge-webcomponents/dist/components/clock/clock";
import { ObcTopBar } from "@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar";
import { ObcAzimuthThruster } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/azimuth-thruster/azimuth-thruster";
import { DOMAttributes } from "react";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["obc-azimuth-thruster"]: CustomElement<ObcAzimuthThruster>;
      ["obc-top-bar"]: CustomElement<ObcTopBar>;
      ["obc-clock"]: CustomElement<ObcClock>;
      ['obc-alert-button']: CustomElement<ObcAlertButton>;
    }
  }
}
