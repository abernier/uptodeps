const path = require('path')

const uptodeps = require('../index.js')

const target = path.resolve(__dirname, './dist/final.js')
const entrypoint = path.resolve(__dirname, './src/index.js')

uptodeps(target, entrypoint, {
  filter: path => !path.includes('node_modules')
})