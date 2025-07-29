

function one(){
    const username='pranshu'

    function two(){
        const website='youtube'
        // console.log(username)
    }
    // console.log(website)//----->website is not defined
    two()
}
one()

if (true){
    const username ='pranshu'
    if (username==='pranshu'){
        const website='youtube'
        // console.log(username+website)//-->pranshuyoutube
    }
    // console.log(website)//---->website is not defined
}
// console.log(username)//--->website is not defined

addone(5)
function addone(num){
    return num+1
}
//  addone(5)
// addtwo(6)
const addtwo=function(num){
    return num+2
}
addtwo(6)