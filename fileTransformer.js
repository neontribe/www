// Lets Jest represent imported assets with their filenames
const path = require('path')

module.exports = {
  process(src, filename) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
  },
}
