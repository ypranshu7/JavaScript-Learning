const username='pranshu'
if (username){
    // console.log(username)
}

// falsy value
// false,0,-0,"",null,undefined,NaN

//truthy value
// '0','false',ture," ",[],{},function(){}

const userEmail=[]
if (userEmail.length===0){
    // console.log("Array is empty")
}
 
const emptyObj={}
if (Object.keys(emptyObj).length===0){
    // console.log("Array is empty")
}

// nullish coalescing operator(??) :null undefinde
let val1;
// val1 =5??10
// val1 = null??10
// val1=undefined??10
val1=null??10??20

console.log(val1)

// Ternary operator
// condition?true:false
const iceTeaPrice=200
iceTeaPrice>100?console.log('grater than 100'):console.log('less than 100')