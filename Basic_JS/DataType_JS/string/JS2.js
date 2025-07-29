// let myDate=new Date()
// console.log(typeof myDate)
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleTimeString())

// let myCreateDate=new Date(2025,5,17)
// let myCreateDate=new Date(2025,5,17,22,5)
let myCreateDate=new Date("2025-06-17")
// console.log(myCreateDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log( Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})