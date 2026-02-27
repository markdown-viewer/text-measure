/**
 * Node/fibjs entry point
 *
 * Auto-configures WebView-based text measurement provider
 * so callers don't need to set it up manually.
 */

export * from './index.ts';

import { setTextMeasureProvider, getTextMeasureProvider } from './measure.ts';
import { createWebViewProvider } from './webview-provider.ts';

// Auto-setup: create WebView provider if none is already configured
if (!getTextMeasureProvider()) {
  setTextMeasureProvider(createWebViewProvider());
}
