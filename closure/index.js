//a function always bundled with its lexical scope is called closure

function outer() {
  var a = 10
  function inner() {
    console.log(a)
  }
  return inner  //remove from stack
}

var innerFn = outer()
innerFn() //10
