//range request helps go to a specific part of the file
const { createServer } = require('http')
const { stat, createReadStream } = require('fs')
const { promisify } = require('util')
const { create } = require('domain')
const fileName = '../streams/video.mp4'
const fileInfo = promisify(stat)

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName)
  const range = req.headers.range
    // console.log('range: ', range)
  if (range) {
    let [start, end] = range.replace(/bytes=/, '').split('-')
    start = parseInt(start, 10)
    end = end ? parseInt(end, 10) : size - 1
    res.writeHead(206, {    //206 partial content
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Content-length': end - start + 1,
      'Content-Type': 'video/mp4',
    })
    createReadStream(fileName, { start, end }).pipe(res)
  } else {
    res.writeHead(200, {
      'Content-Length': size,
      'Content-Type': 'video/mp4',
    })
    createReadStream(fileName).pipe(res)
  }
}).listen(3000, () => console.log('server started'))


