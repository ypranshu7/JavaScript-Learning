const coding=['py','java','c','ruby','js']
coding.forEach(function (val){
    // console.log(val)
})

coding.forEach( (val)=>{
    // console.log(val)
})

function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

coding.forEach((item,index,Array)=>{
    //    console.log(item,index,Array)
})

const myCoding=[
    {
       languageName:'python',
       languageFileName:'py'
    },
    {
       languageName:'javascript',
       languageFileName:'js'
    },
    {
       languageName:'cpp',
       languageFileName:'c++'
    }
]

myCoding.forEach((item)=>{
    console.log(item)
})