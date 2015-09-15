[![Build Status](https://travis-ci.org/dperuo/receiptful.svg?branch=master)](https://travis-ci.org/dperuo/receiptful)

receiptful
==========

Coding Challenge for [Receiptful](https://receiptful.com/).

## Challenge

In answering the code questions, please submit code as if you intended to ship it to production. The details matter. Tests are expected, as is well written, simple idiomatic code.

We’d recommend you use whatever language you feel strongest in. It doesn’t have to be one we use — we believe good engineers can be productive in any language. Other applicants have found gist.github.com useful for sharing solutions.

We believe this should take less than a hour to complete, but understand you may have other commitments and time constraints.

Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. `[[1,2,[3]],4]` -> `[1,2,3,4]`.

## Quick Start

1. Clone this repo to your local machine; or...
2. Copy `dist/flatten-array.min.js` directly into your project in the usual way. CommonJS, AMD, and browser globals are supported.
3. The module is bound to `flattenArray()` in the global scope.

## Settings

`flattenArray()` takes a config object as the second parameter.

### `sortByAlpha`

- Type: boolean
- Default: false
- When true, sorts the array using `Array.prototype.sort()`.

### `sortByNum`

- Type: boolean
- Default: false
- When true, sorts the array based on numeric value.

### `reversed`

- Type: boolean
- Default: false
- When true, sorts the array using `Array.prototype.reverse()`.

## Examples

`flattenArray()` returns a flat array. The array parameter can be any length, depth, or type.

```javascript
var nested = [1, 3, 5, [2, [4, 6]]];

var flat = flattenArray(nested);
// flat => [1, 3, 5, 2, 4, 6]

var sorted = flattenArray(nested, {sortByNum: true});
// sorted => [1, 2, 3, 4, 5, 6]

var reversed = flattenArray(nested, {reversed: true});
// reversed => [6, 4, 2, 5, 3, 1]

var sortedReversed = flattenArray(nested, {sortByNum: true, reversed: true});
// sortedReversed => [6, 5, 4, 3, 2, 1]
```

## Architecture

| Location | Description
| :--- | :---
| `dist/` | Production/distribution code
| `node_modules/` | Modules installed from npm
| `src/` | Source code
| `spec/` | Configs and specs used by Jasmine
| `.jscsrc` | Config file used by JSCS
| `.jshintrc` | Config file used by JSHint
| `.travis.yml` | Config file used by Travis CI
| `CONTRIBUTING.md` | How to contribute to this project
| `LICENSE` | The license for this repo
| `package.json` | Package file for npm
| `README.md` | This file

## Contributing

Please see [CONTRIBUTING.md](https://github.com/dperuo/receiptful/blob/master/CONTRIBUTING.md) for details.
