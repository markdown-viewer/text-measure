# @markdown-viewer/text-measure

Text measurement utilities for browser and [fibjs](https://fibjs.org/) environments.

Provides a pluggable `TextMeasureProvider` interface for measuring text dimensions (width, height, line count) across different runtimes — DOM in the browser, headless WebView in fibjs.

## Installation

```bash
npm install @markdown-viewer/text-measure
```

## Usage

### Basic measurement (with provider)

```ts
import { setTextMeasureProvider, measureText } from '@markdown-viewer/text-measure';

// Set up a provider first (see below)
setTextMeasureProvider(myProvider);

const { width, height } = measureText('Hello World', 14, 'Arial');
```

### fibjs WebView provider

For server-side measurement in fibjs using a headless WebView:

```ts
import { setTextMeasureProvider } from '@markdown-viewer/text-measure';
import { createWebViewProvider } from '@markdown-viewer/text-measure/webview-provider';

const provider = createWebViewProvider();
setTextMeasureProvider(provider);

// ... measure text ...

provider.dispose(); // clean up when done
```

### Layout measurement

Measure text with wrapping and line information:

```ts
import { measureTextLayout } from '@markdown-viewer/text-measure';

const layout = measureTextLayout('Long text...', 14, 'Arial', 'normal', 'normal', 200);
// => { width, height, lineCount, lineHeight }
```

## API

### Provider management

| Function | Description |
|----------|-------------|
| `setTextMeasureProvider(provider)` | Set the global text measurement provider |
| `getTextMeasureProvider()` | Get the current provider (or `null`) |
| `resetTextMeasureProvider()` | Reset to default (no provider) |

### Measurement functions

| Function | Description |
|----------|-------------|
| `measureText(text, fontSize, fontFamily, ...)` | Measure text dimensions |
| `measureMultilineText(text, fontSize, fontFamily, ...)` | Measure multi-line text |
| `measureTextLayout(text, fontSize, fontFamily, ..., containerWidth)` | Measure with wrapping/layout info |
| `isBrowserMeasurementAvailable()` | Check if DOM measurement is available |

### Constants

| Export | Description |
|--------|-------------|
| `DEFAULT_FONT_FAMILY` | Default font family (`'Arial, Helvetica, sans-serif'`) |
| `setDefaultFontFamily(family)` | Override the default font family |

### Types

- `TextMeasureProvider` — Interface for custom measurement backends
- `TextLayoutResult` — `{ width, height, lineCount, lineHeight }`
- `WebViewTextMeasureProvider` — Extended provider with `dispose()` method

## License

MIT
