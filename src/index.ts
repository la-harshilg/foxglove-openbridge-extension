import { ExtensionContext } from "@foxglove/extension";
import "@oicl/openbridge-webcomponents/src/palettes/variables.css";
import "./index.css";

import { initOpenBridgePanel } from "./MainPanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "OpenBridge", initPanel: initOpenBridgePanel });
}
