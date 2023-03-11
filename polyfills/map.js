function myPolyfillMap(arr, cb) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]))
  }

  return newArr
}

function square(x) {
  return x * x
}

console.log(myPolyfillMap([1, 2, 3, 4, 5], square))
