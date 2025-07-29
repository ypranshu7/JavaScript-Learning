const name="pranshu"
const age="22"
// console.log(name+age+" value"); 

console.log('hello my name is ${name} and my age is ${age}')
const sname=new String("prnashu")
console.log(sname.length)
console.log(sname._proto_)
console.log(sname.toUpperCase())
console.log(sname.charAt(3))
console.log(sname.indexOf('a'))

const newString=sname.substring(0,4)
console.log(newString)
const anotherString=sname.slice(-6,4)
console.log(anotherString)
