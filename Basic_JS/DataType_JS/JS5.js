// Primitive

// 7 type: string, number ,Boolean, null, undefined, symbole, bigint
 
const score=200
const scoreValue=100.3

const IsLoggedIn=false
const outsideTemp=null
let userEmail=undefined

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId)

const bigint=3465657657665545n
console.log(typeof bigint)
console.log(typeof outsideTemp)

// Reference (non-primitive)
// Array,Object,function

const heros=['ironman','spiderman','thor']
let myProfile={
    Name:"pranshu yadav",
    age:22,
    Rollno:327,
    Branch:"CSE-AI"
}

const myFunction=function(){
    console.log("hello guys")
}



// **************************************************

// stack (primitive),heap(non-primitive)

let myName="pranshu"
let anotherName=myName
anotherName="rudra"
console.log(myName)
console.log(anotherName)

let userone={
    name:"pranshu",
    age:22,
    emailId:"user@gmail.com"
}

let usertwo=userone
emailId="ypran@gmail.com"

console.log(userone)
console.log(usertwo)

