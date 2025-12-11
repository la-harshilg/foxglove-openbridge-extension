import { ObcTopBar } from "@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar";
import { ObcAzimuthThruster } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/azimuth-thruster/azimuth-thruster";
import { DOMAttributes } from "react";
import { ObcNavigationMenu } from '@oicl/openbridge-webcomponents/dist/components/navigation-menu/navigation-menu';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['obc-azimuth-thruster']: CustomElement<ObcAzimuthThruster>;
      ['obc-top-bar']: CustomElement<ObcTopBar>;
      ['obc-navigation-menu']: CustomElement<ObcNavigationMenu>;
    }
  }
}
