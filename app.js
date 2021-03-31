// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }
const filterOutOdds = (...nums) => {
  return nums.filter((num) => num % 2 === 0);
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(filterOutOdds(...arr));

//findMin
const findMin = (...nums) => {
  return nums.reduce( (acc, num) => acc < num ? acc : num );
}
console.log(findMin(1,4,12,-3)) // -3
console.log(findMin(1,-1)) // -1
console.log(findMin(3,1)) // 1

// mergeObjects
const mergeObjects = (obj1, obj2) => obj3 = { ...obj1, ...obj2 }
console.log(
  mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}
);

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => {
  const dArgs = args.map((num) => num * 2);
  return [...arr, ...dArgs];
};

console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)) // [2, 20, 8]

//slice and dice!
const testArr1 = [7, 11, 3, 4, 5, 6];
const testArr2 = [5, 6, 10, 13, 8, 1];

const removeRandom = (items) => {
  idx = Math.floor(Math.random() * items.length);
  const arr1 = items.slice(0, idx);
  const arr2 = items.slice(idx+1);
  return [...arr1, ...arr2]
}
console.log(removeRandom(testArr1));

const extend = (array1, array2) => [...array1, ...array2];
console.log(extend(testArr1, testArr2)); 

const obj1 = { 
        firstName: 'Jerry',
        lastName: 'Hsu'
}
const obj2 = {
        make: 'Cannondale',
        model: 'CAAD10'
}

const addKeyVal = (obj, key, val) => ( { ...obj, ...{[key]: val} } );
console.log(addKeyVal(obj1, 'age', 34))

const removeKey = (obj, key) => { 
  newObj = {...obj};
  delete newObj[key];
  return newObj;
}
console.log(removeKey(obj1, 'lastName'))

const combine = (obj1, obj2) => ( { ...obj1, ...obj2 } );
console.log(combine(obj1, obj2));

const update = (obj, key, val) => ( { ...obj, ...{ [key]: val }} );
console.log(update(obj2, 'groupset', '105'))