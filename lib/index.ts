/**
 * Text measurement module
 *
 * Provides text measurement utilities for both browser and server-side environments.
 */

export { DEFAULT_FONT_FAMILY, setDefaultFontFamily } from './constants.ts';

export {
  type TextLayoutResult,
  type TextMeasureProvider,
  setTextMeasureProvider,
  getTextMeasureProvider,
  resetTextMeasureProvider,
  measureText,
  measureMultilineText,
  measureTextLayout,
  isBrowserMeasurementAvailable
} from './measure.ts';

// NOTE: webview-provider is NOT exported here to avoid bundlers pulling in
// Node.js-only dependencies (gui, coroutine). Import it directly if needed:
//   import { createWebViewProvider } from '@markdown-viewer/text-measure/webview-provider';
export type { WebViewTextMeasureProvider } from './webview-provider.ts';
