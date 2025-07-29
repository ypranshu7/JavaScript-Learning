
// Object singleton
// Object.create
// object letrals

const mysym=Symbol("key")

const jsUser={
    Name:'pranshu',
    [mysym]: 'mykey',
    age:22,
    Branch:'CSE-AI',
    Roll_No:327,
    Email:'pranshu34@google.com'
}
// console.log(jsUser.Name)
// console.log(jsUser["Name"])
// console.log(jsUser["Email"])
// console.log(jsUser[mysym])
jsUser.Email="pranshugoogle.com"
// Object.freeze(jsUser)
jsUser.Email="pranshumicrosoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello guys ")
}
jsUser.greetingTwo = function(){
    console.log(`hello guys ${this.Name}`)
}
console.log(jsUser.greetingTwo())