const uptodeps = require('./index.js')

uptodeps('index.js', {
  filter: path => !path.includes('node_modules')
})