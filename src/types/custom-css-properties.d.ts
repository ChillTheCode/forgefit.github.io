// src/types/custom-css-properties.d.ts
import 'react';

declare module 'react' {
  interface CSSProperties {
    '--hover-border'?: string;
    '--hover-color'?: string;
    '--hover-bg'?: string;
    // Add any other custom CSS properties you use
  }
}