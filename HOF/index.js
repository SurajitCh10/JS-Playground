let myArr = [1, 2, 3, 4, 5]

//map
let newArr1 = myArr.map(function (x) {
  return x * 2
})
console.log(newArr1) // [2,4,6,8,10]

//filter
let newArr2 = myArr.filter(function (x) {
  return x > 2
})
console.log(newArr2) // [3,4,5]

//reduce
let newArr3 = myArr.reduce(function (accumulator, x) {
  return accumulator + x
}, 0)
console.log(newArr3) // 15
