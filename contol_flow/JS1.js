const temprature=50
if(temprature>40){
    //  console.log('temprature greater than 40')
}else{
    // console.log('teprature less than 40')
}
// console.log('executing')

const score=200
if (score>100){
    const power='fly'
    // console.log(`user power ${power}`)
}
// console.log(`user power ${power}`)//--->power is not defined

const balence=70
// if (balence>50) console.log('test'),console.log('test2');//---->in this type not used

// ******nested if-else********

if (balence<50){
    // console.log('balence less than 50')
}else if(balence<80){
    // console.log('balence less than 80')
}else {
    // console.log('balence grater than 80')
}

const userLoggedIn=true
const debitcart=true
const loggedInFromRj=true
if(userLoggedIn&&debitcart){
    console.log('allow to buy course')
}

if (debitcart||loggedInFromRj){
    console.log('WELCOME TO RJ')
}