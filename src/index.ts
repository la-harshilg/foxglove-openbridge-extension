import { ExtensionContext } from "@foxglove/extension";
import "@oicl/openbridge-webcomponents/src/palettes/variables.css";
import '@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar.js';
import '@oicl/openbridge-webcomponents/dist/components/clock/clock.js';
import '@oicl/openbridge-webcomponents/dist/components/breadcrumb/breadcrumb.js';
import '@oicl/openbridge-webcomponents/dist/navigation-instruments/azimuth-thruster/azimuth-thruster.js';
import '@oicl/openbridge-webcomponents/dist/components/alert-button/alert-button.js';
import "./index.css";

import { initOpenBridgePanel } from "./MainPanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "OpenBridge", initPanel: initOpenBridgePanel });
}
