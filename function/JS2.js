// (...) --->rest/seprate
function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,3000,400,500,699))//--->[ 400, 500, 699 ]

const users={
    username:'pranshu',
    userId:327
}
function userobject(anyobject){
    console.log(`username is ${anyobject.username} and userId is ${anyobject.userId}`)
}
// userobject(users)//--->username is pranshu and userId is 327
userobject({
    username:'pranshu',
    userId:499
})

const myArray=[200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))