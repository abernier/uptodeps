`uptodeps(file)` list all file's dependencies and returns false if one is newer than the file itself.

# Usage

```js
const uptodeps = require('uptodeps')

if (!uptodeps('src/foo.js')) {
  console.log('At least one dep is newer!')
} else {
  console.log('up to date!')
}
```