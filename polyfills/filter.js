//normal filter
arr = []
arr[2] = 8
arr[1] = 1
arr[3] = 4
arr[4] = 6

console.log(arr) //{empty, 1,8,6} sparse array

arr.filter((el, i) => {
  return el % 2 == 0
}) // [8,4,6] empty is filtered

arr.filter((el, i) => {
  if (i === 2) {
    arr[i] = 3
  }
  return el % 2 == 0
}) // [8,4,6] previous array is taken

Array.prototype.filter = null
if (!Array.prototype.filter) {
  Array.prototype.filter = function (callbackFn) {
    if (typeof callbackFn !== 'function') {
      throw new TypeError(`${callbackFn} is not a valid Function`)
    }

    let res = []
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        //for sparse array
        let originalValue = this[i] //to store prev
        if (callbackFn(this[i], i, this)) {
          res.push(originalValue)
        }
      }
    }
    return res
  }
}
