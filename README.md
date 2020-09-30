[![ci/cd](https://github.com/abernier/uptodeps/workflows/ci/cd/badge.svg)](https://github.com/abernier/uptodeps/actions?query=workflow%3Aci%2Fcd)
[![NPM version](https://img.shields.io/npm/v/uptodeps.svg?style=flat)](https://www.npmjs.com/package/uptodeps)

`uptodeps(file)` returns `true` if the file is newer that all its dependencies (`false` if at least one dependency is newer).

# Usage

```js
const uptodeps = require('uptodeps')

if (!uptodeps('src/foo.js')) {
  console.log('At least one dependency is newer.')
} else {
  console.log('File is newer than all its dependencies.')
}
```