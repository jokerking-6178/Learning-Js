const arr = [1,2,2,3,4,5]
arr.push(6)
arr.pop()
console.log(arr)
arr.shift()
arr.unshift(999)
console.log(arr.includes(9))
console.log(arr.indexOf(3))
const newarr = arr.join()
//slice - does not effect original array
//splice - effect original array

let arr1 = [8,9,0]
let arr3 = arr.concat(arr1)
// arr3 = [...arr , ...arr1]
console.log(arr3)