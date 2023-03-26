var fs = require('fs')
var http = require('http')
var file = './video.mp4'

http
  .createServer((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'video/mp4' })
    fs.createReadStream(file).pipe(res).on('error', console.error)
  })
  .listen(3000, () => {
    console.log('server is running on port 3000')
  })
//run as node --trace_gc buffer.js
//it has no mark-sweep(problamatic clean up garbage)
// but has scavenge(quicker garbage collector)
