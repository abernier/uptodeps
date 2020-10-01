[![ci/cd](https://github.com/abernier/uptodeps/workflows/ci/cd/badge.svg)](https://github.com/abernier/uptodeps/actions?query=workflow%3Aci%2Fcd)
[![NPM version](https://img.shields.io/npm/v/uptodeps.svg?style=flat)](https://www.npmjs.com/package/uptodeps)

`uptodeps(target, entrypoint)` returns `true` if the `target` file is newer that all `entrypoint`'s dependencies (`false` if at least one dependency is newer).

# Usage

```js
const uptodeps = require('uptodeps')

const target = path.resolve(__dirname, './dist/foo.js') // the file we target
const entrypoint = path.resolve(__dirname, './src/foo.js') // the file from which we determine dependencies

if (!uptodeps(target, entrypoint)) {
  console.log('At least one dependency is newer.')
} else {
  console.log('Target file is newer than all dependencies.')
}
```

You can also exclude some dependencies with `filter` option :

```js
uptodeps(target, entrypoint, {
  filter: path => !path.includes('node_modules') // exclude node_modules dependencies
})
```

NB: see [`dependency-tree` `filter` option](https://www.npmjs.com/package/dependency-tree#options) for more details