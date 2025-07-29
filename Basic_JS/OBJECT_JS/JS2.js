// const myIntro=new Object()
const myIntro={}
myIntro.name='Pranshu Yadav'
myIntro.age=22
myIntro.roleNo=327
myIntro.brach='CSE-AI'
// console.log(myIntro)

const regularUser={
    Email:'pranshu@ramil.com',
    userName:{
        firstName:'Pranshu',
        lastName:'yadav'
    }
}
// console.log(regularUser.userName.firstName)//-->Pranshu

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3)//--->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)//--->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3={...obj1,...obj2}
// console.log(obj3)//--->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users=[
    {
    },
    {
    },
    {   
    }

]
// users[1].Email
// console.log(myIntro)
// console.log(Object.keys(myIntro))//--->[ 'name', 'age', 'roleNo', 'brach' ]
// console.log(Object.values(myIntro))//--->[ 'Pranshu Yadav', 22, 327, 'CSE-AI' ]
// console.log(Object.entries(myIntro))//---> [ 'name', 'Pranshu Yadav' ],[ 'age', 22 ],[ 'roleNo', 327 ],[ 'brach', 'CSE-AI' ]

console.log(myIntro.hasOwnProperty('Email'))//--->false






