const myArray=[1,2,3,4]
// const newArray=myArray.reduce((acc,curval)=>{
//     console.log(`acc:${acc} and curval ${curval}`)
//     return acc+curval
// },0)
// const newArray=myArray.reduce((acc,curval)=>acc+curval)
// console.log(newArray)

const shopingCard=[
    {
      courseName:'python',
      price:5999
    },
    {
      courseName:'js',
      price:3999
    },
    {
      courseName:'java',
      price:9999
    },
]
const totalPrice=shopingCard.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrice)