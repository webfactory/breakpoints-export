# breakpoints-export Utility

A JS/SCSS utility that syncs (S)CSS breakpoints with runtime JavaScript by exporting breakpoint maps as CSS custom properties and providing a tiny JS helper to read and compare them against the current viewport (e.g. bp.lessThan, bp.greaterThan).

## Installation

```
npm install @webfactoryde/breakpoints-export
```

## Usage

Define your breakpoints as a Sass map and import the SCSS mixin in your module(s) and use it to generate the necessary Custom Properties:

```scss
@use '@webfactoryde/breakpoints-export' as *;

$breakpoints: (
    screen-m: 768px,
    screen-l: 1200px,
    navigation-breakpoint: 875px,
);

@include breakpoints-export($breakpoints);
```

Import the `breakpoints-export` function in your module(s) and use the comparison you need:

```javascript
// your module
import bp from '@webfactoryde/breakpoints-export';

if (bp.greaterThan('navigation-breakpoint')) {
    // do cool stuff
}
```
