var a = 10
console.log('line 2', a) // 10
function fn() {
  console.log('line 4', a) //undefined
  var a = 20
  a++
  console.log('line 7', a) //21
  if (a) {
    var a = 30
    console.log('line 10', a) //30
  }
  console.log('line 12', a) //30
}
fn()
console.log('line 15', a) //10
