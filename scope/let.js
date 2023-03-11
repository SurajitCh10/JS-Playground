let fruits = 'apple'
console.log('line 2', fruits) // apple
{
  console.log(fruits) // TDZ error
  let fruits = 'banana'
  // var fruits = 'orange' //illegal shadowing
  console.log('line 5', fruits) // banana, variable shadowing
  {
    console.log('line 7', fruits) // banana outside
  }
  console.log('line 9', fruits) // banana
}
console.log('line 11', fruits) // apple
