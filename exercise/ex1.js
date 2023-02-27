// 1. array of values
let array = ['apple', 'banana', 'mango'];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
const arr = array.map(a=>{
  return a
})
console.log(arr);
// 2. array of objects
let arrayObj = [{fruit: 'apple'}, {fruit: 'banana'}, {fruit: 'mango'}];

// for (let i = 0; i < arrayObj.length; i++) {
//   console.log(arrayObj[i].fruit);
// }
const print=arrayObj.map(({fruit})=>{
  console.log(fruit);
})

// 3. objects
let object = {fruit1: 'apple', fruit2: 'banana', fruit3: 'mango'};

console.log(object.fruit1, object.fruit2, object.fruit3);

