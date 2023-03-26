// function hideString(str, done){
//     done(str.replace(/[a-zA-Z]/g, "X"));
// }  //prints "XXXX end" process synchronously

function hideString(str, done) {
  process.nextTick(() => {
    done(str.replace(/[a-zA-Z]/g, 'X'))
  }) //prints "end XXXX" process asynchronously
}

hideString('this will be replaced', (hidden) => {
  console.log(hidden)
})
console.log('end')

//callback
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000)
}
console.log('delay start')
delay(2, () => {
  console.log('2 sec')
  delay(1, () => {
    console.log('3 sec')
    delay(1, () => {
      console.log('4 sec')
    })
  })
})  // callback hell
