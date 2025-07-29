const promiseOne=new Promise(function(resolve,reject){
    //Do an Async task
    // DB calls , cryptography,network
    setTimeout(() => {
        console.log("Async task is completed")
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consume")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2 is completed')
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolve")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 3 is comleted")
        resolve({username:"Pranshu", Email:"pranshu32@gr.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"Pranshu",Password:"2121"})
        } else{
            console.log("ERROR:something went wrong")
        }
        
    }, 1000);
})


// const username --->this mothod username is not found
promiseFour.then(function(user){
   console.log(user)
    return user.username
}).then((username)=>{
    console.log(username) 
}).catch((error)=>{
    console.log(error)
}).finally(()=>console.log("the promise is either resolve or reject"))


const promiseFive=new Promise(function(){
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:"JavaScript",Password:'1212'})
        }else{
            console.log("ERROR:JS went wrong")
        }
    }, 1000);
})

// async function consumePromiseFive(){
//     const response=await promiseFive
//     console.log(response)
// }
async function consumePromiseFive(){
     try {
         const response=await promiseFive
    console.log(response)
     } catch (error) {
        console.log(error)
        
     }
}
consumePromiseFive()

// async function getAllUser(){
//     try {
//          const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         //  console.log(response)
//     const data =await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("ERROR:",error)
//     }

// }
// getAllUser()

fetch('https://api.github.com/users/ypranshu7')
.then((response)=> response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))