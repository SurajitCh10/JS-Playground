var fs = require('fs')
var http = require('http')
var file = './video.mp4'

http
  .createServer((req, res) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.log('hmmm: ', err)
      }
      res.writeHeader(200, { 'Content-Type': 'video/mp4' })
      res.end(data)
    })
  })
  .listen(3000, () => {
    console.log('server is running on port 3000')
  })
//run as node --trace_gc buffer.js
//it has both mark-sweep(problamatic clean up garbage) 
// and scavenge(quicker garbage collector)
