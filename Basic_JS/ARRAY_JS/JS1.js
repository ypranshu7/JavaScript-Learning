const myArr=[2,5,4,6,3,7]
const myHeros=['Ironman','Spiderman','thor']
const myArr2=new Array(1,0,2,4,5,8)
console.log(myArr[1])

// ARRAY type--------

// myArr.push(8)
// myArr.push(0)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr)

const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr)

// Slice,Splice

console.log("A",myArr)
const myAr1=myArr.slice(1,3)
 
console.log(myAr1)
console.log("B",myArr)

const myAr2=myArr.splice(1,3)
console.log("C",myArr)
console.log(myAr2)