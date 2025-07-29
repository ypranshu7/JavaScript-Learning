// for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
for (let i=0;i<10;i++){
    const count=i
    if(count==5){
     break;
    }
    // console.log(count)
}

for (let i = 0; i < 10; i++) {
    // console.log(`Inner table:${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(i + '*' + j + '=' + i*j)
    }
    
}
const array=['superman','flash','batman']
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element)
    
}

for (let i = 0; i < 10; i++) {
    
    if (i==5){
        // console.log('detect 5')
        break
    }
    // console.log(`value i is:${i}`)
}


for (let i = 0; i < 10; i++) {
    
    if (i==5){
        console.log('detect 5')
        continue
    }
    console.log(`value i is:${i}`)
}