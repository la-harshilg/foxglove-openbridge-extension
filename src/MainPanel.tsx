import { PanelExtensionContext } from "@foxglove/extension";
import { createRoot } from "react-dom/client";

import { OpenBridgePanel } from "./panels";

export function initOpenBridgePanel(context: PanelExtensionContext): () => void {
  const root = createRoot(context.panelElement);
  root.render(<OpenBridgePanel context={context} />);

  // Return a function to run when the panel is removed
  return () => {
    root.unmount();
  };
}
