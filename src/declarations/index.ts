import { ObcNavigationMenu } from "@oicl/openbridge-webcomponents/dist/components/navigation-menu/navigation-menu.js";
import { ObcTopBar } from "@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar";
import { ObcAzimuthThruster } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/azimuth-thruster/azimuth-thruster";
import { ObcClock } from "@oicl/openbridge-webcomponents/dist/components/clock/clock";
import { DOMAttributes } from "react";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["obc-azimuth-thruster"]: CustomElement<ObcAzimuthThruster>;
      ["obc-top-bar"]: CustomElement<ObcTopBar>;
      ["obc-navigation-menu"]: CustomElement<ObcNavigationMenu>;
      ["obc-clock"]: CustomElement<ObcClock>;
    }
  }
}
