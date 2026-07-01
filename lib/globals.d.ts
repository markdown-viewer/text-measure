/**
 * Type declarations for text-measure runtime environments.
 *
 * This package runs in two contexts:
 *   - Browser/WebView: DOM APIs (document, window, HTMLElement) are available.
 *   - fibjs: Built-in modules (gui, coroutine) are available.
 *
 * Since the draw-uml tsconfig targets ES2018 without "dom" lib,
 * we declare the needed types here.
 */

// ── DOM types (available in browser / WebView) ──────────────────────────────

declare var window: {
  getComputedStyle(el: HTMLElement): CSSStyleDeclaration;
  // Allow any other window properties
  [key: string]: any;
};

declare var document: {
  createElement(tag: string): HTMLElement;
  body: HTMLElement;
  // Allow any other document properties
  [key: string]: any;
};

declare class HTMLElement {
  style: CSSStyleDeclaration;
  innerHTML: string;
  textContent: string;
  scrollWidth: number;
  tagName: string;
  querySelector(selector: string): HTMLElement | null;
  querySelectorAll(selector: string): NodeListOf<HTMLElement>;
  getBoundingClientRect(): { width: number; height: number; top: number; left: number };
  appendChild(child: HTMLElement): void;
  [key: string]: any;
}

// Note: HTMLDivElement extends HTMLElement, using HTMLElement is sufficient
// for the subset of APIs used in this package.
declare type HTMLDivElement = HTMLElement;

declare class CSSStyleDeclaration {
  position: string;
  visibility: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  lineHeight: string;
  width: string;
  height: string;
  display: string;
  overflow: string;
  overflowWrap: string;
  whiteSpace: string;
  wordWrap: string;
  margin: string;
  padding: string;
  [key: string]: any;
}

declare class NodeListOf<T> implements Iterable<T> {
  forEach(cb: (el: T) => void): void;
  [Symbol.iterator](): Iterator<T>;
}

// ── fibjs built-in modules ──────────────────────────────────────────────────

declare module 'gui' {
  namespace gui {
    function open(opts: { width: number; height: number; visible: boolean }): any;
  }
  export = gui;
}

declare module 'coroutine' {
  namespace coroutine {
    function start(fn: Function): void;
    function sleep(ms: number): void;
  }
  export = coroutine;
}
