function fun(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")
}
// fun()

// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(3,4)//-->7
// add(3,"4")//-->34
// add(3,"a")//-->3a
// add(3,null)//-->3
// const result=add(3,6)
// console.log("result:",result)//---->result: undefined

function add(num1,num2){
    //  let result =num1+num2
    //  return result
    //  console.log("pranshu")//--->nothing
    return num1+num2
 }
 const result=add(3,6)
//   console.log("result:",result)//--->result: 9

function logingUser(username){
    if(!username){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
// console.log(logingUser('pranshu'))//--->pranshu just logged in
console.log(logingUser())//--->Please enter the username
