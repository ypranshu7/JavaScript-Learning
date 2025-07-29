const arr=[1,2,3,4,5]
for (const element of arr) {
    // console.log(element)
}

const greeting='pranshu yadav'
for (const greet of greeting) {
    // console.log(`word of ${greet}`)
}

//MAP
const map=  new Map()
map.set('IN','india')
map.set('USA','United State Of America')
map.set('FR','France')
map.set('IN','india')
// console.log(map)

for (const [key,value] of map) {
    // console.log(key ,':', value)
}

const myObject={
    name:'pranshu',
    id:327
}
for (const [key,value] of myObject) {
    // console.log(key,':',value)//--->myObject is not iterable
    
}