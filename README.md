# @markdown-viewer/text-measure

Text measurement utilities for browser and [fibjs](https://fibjs.org/) environments.

Provides a pluggable `TextMeasureProvider` interface for measuring text dimensions (width, height, line count) across different runtimes — DOM in the browser, headless WebView in fibjs.

## Installation

```bash
npm install @markdown-viewer/text-measure
```

## Usage

### Basic measurement

In fibjs, the WebView-based text measurement provider is **automatically configured** on import — no manual setup needed.

```ts
import { measureText } from '@markdown-viewer/text-measure';

const { width, height } = measureText('Hello World', 14, 'Arial');
```

### Layout measurement

Measure text with wrapping and line information:

```ts
import { measureTextLayout } from '@markdown-viewer/text-measure';

const layout = measureTextLayout('Long text...', 14, 'Arial', 'normal', 'normal', 200);
// => { width, height, lineCount, lineHeight }
```

## API

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

- `TextLayoutResult` — `{ width, height, lineCount, lineHeight }`

## License

MIT
