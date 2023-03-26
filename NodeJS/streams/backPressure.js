//highWaterMark: MAXIMUM NUMBER OF BYTES TO STORE IN THE BUFFER BEFORE PAUSING THE READABLE STREAM
//highWaterMark: DEFAULT VALUE IS 16KB
const { createReadStream, createWriteStream } = require('fs')
const readStream = createReadStream('./video.mp4')
const writeStream = createWriteStream('./copy.mp4', {
  highWaterMark: 163843,
})

readStream.on('data', (chunk) => {
  const result = writeStream.write(chunk)
  if (!result) {
    //host is full
    console.log('backpressure')
    readStream.pause()
  }
})

readStream.on('error', (error) => {
  console.log('an error occurred', error.message)
})

writeStream.on('drain', () => {
  console.log('drained')
  readStream.resume()
})

readStream.on('end', () => {
  console.log('done!')
})

writeStream.on('close', () => {
  process.stdout.write('file copied')
})
