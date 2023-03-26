const fs = require('fs')
const readStream = fs.createReadStream('./video.mp4')

readStream.on('data', (chunk) =>{
    console.log('size: ', chunk.length)
})

readStream.on('end', ()=>{
    console.log('readstream ended')
})

readStream.on('error', (err)=>{
    console.log('An error occured: ', err)
})

readStream.pause()  // non flowing mode
process.stdin.on('data', (chunk) =>{
    if(chunk.toString().trim() === 'end'){
        readStream.resume() // flowing mode
    }
    readStream.read()
})