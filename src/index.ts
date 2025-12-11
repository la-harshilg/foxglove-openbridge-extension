import { ExtensionContext } from "@foxglove/extension";
import "@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar.js";
import '@oicl/openbridge-webcomponents/dist/navigation-instruments/azimuth-thruster';
import '@oicl/openbridge-webcomponents/dist/components/navigation-menu';
import '@oicl/openbridge-webcomponents/dist/navigation-instruments/azimuth-thruster/azimuth-thruster.js';
import "@oicl/openbridge-webcomponents/src/palettes/variables.css";
import './index.css';

import { initExamplePanel } from "./ExamplePanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "example-panel", initPanel: initExamplePanel });
}
