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