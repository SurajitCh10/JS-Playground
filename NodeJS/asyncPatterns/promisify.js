var fs = require('fs')
var { promisify } = require('util')

var writeFile = promisify(fs.writeFile)
writeFile('sample.txt', 'Written using promisify')
  .then(() => console.log('File successfully written!'))
  .catch((error) => console.log(`error: ${error.message}`))
