const path = require('path')
const fs = require('fs')

const dependencyTree = require('dependency-tree');

function uptodeps(target, entrypoint, opts = {}) {
  // console.log('uptodeps', entrypoint)

  const directory = path.resolve(entrypoint, '..')

  var tree = dependencyTree({
    filename: entrypoint,
    directory,
    filter: opts.filter
  });
  // console.log('tree', JSON.stringify(tree, null, 4))

  const targetMtime = new Date(fs.statSync(target).mtime)

  //
  // Unique deps
  //

  const deps = []
  function traverse(o) {
    for (let k in o) {
      const v = o[k]
      // console.log(k)
      if (!deps.includes(k)) deps.push(k)
      
      traverse(v)
    }
  }
  traverse(tree);

  console.log('deps=', deps)

  //
  // comparing target's mtime with deps' mtimes
  //

  for (let dep of deps) {
    const depMtime = new Date(fs.statSync(dep).mtime)
    
    if (depMtime >= targetMtime) {
      console.log('🛑 dependency %s is newer: %s >= %s', dep, depMtime, targetMtime)
      return false
    }
  }

  console.log('✅ %s is newer than all its dependencies', target)
  return true
}

module.exports = uptodeps