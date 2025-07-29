const marval_heros=["Ironman","spiderman","thor"]
const dc_heros=["superman","flash","batman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros)
// console.log(marval_heros[1][1])

const allHeros=marval_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros=[...marval_heros, ...dc_heros]
// console.log(all_new_heros)

const another_Arr=[1,2,[3,4,5],6,[7,8,[9,0]]]
const real_another_Arr=another_Arr.flat(Infinity)
// console.log(real_another_Arr)

// console.log(Array.isArray("pranshu"))//---->false
// console.log(Array.from("pranshu"))//--->['p','r','a','n','s','h','u']
// console.log(Array.from({name:"pranshu"}))//-->[]

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
