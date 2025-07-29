// (this) ---->curent contest
const user={
    username:'pranshu',
    price:555,
    welcomeWebsite:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
// user.welcomeWebsite()
// user.username='sam'
// user.welcomeWebsite()

// console.log(this)//--->{}

// function pran(){
//     const username='pranshu'
//     // console.log(this.username)//---->undefined
// }
// pran()

// const pran=function(){
//     const username='pranshu'
//     // console.log(this.username)//---->undefined
// }
// pran()
const pran=() =>{
    const username='pranshu'
    // console.log(this.username)//---->undefined
}
pran()

// const addtwo=(num1,num2) => {
//     return num1+num2
// }
// const addtwo=(num1,num2) =>  num1+num2//--->10
// const addtwo=(num1,num2) =>  (num1+num2) //---->10

// const addtwo=(num1,num2) =>  {username:'pranshu'}//--->undefined
const addtwo=(num1,num2) =>  ({username:'pranshu'})
console.log(addtwo(4,6))

