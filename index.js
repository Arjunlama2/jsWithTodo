// /// wap to add two number 


// let firstNumber=80
// let secondNumber=200
// console.log("Sum of",firstNumber,"and",secondNumber,"is",firstNumber+secondNumber)

// // wap to subtract ,multiply,divide


// //if 

// if(firstNumber>secondNumber){
// console.log("hello")


// }
// else{

//     console.log("bye")
// }



// wap to find the gratest number among 3 numbers


// logical operator
// && and  || or
// let marks

// 90>= A+ 80>A 70>B+ 60>B  60< fail

// itteration

// summ of digits of a number

// let num=8795
// reverse the digits


// function is a block of code
// it needs to be called to execute
// we can create variables , operation, ouptut, 
// it can accept value , return value 


// function add(a,b){// parameters

// return a+b
// }


// let sum=add(8,4)
// console.log(sum)



// create a function to accept two value and conole the sum,difference,product,quotion
// create a function to accept two value and return the sum,difference,product,quotion

// function Add(){
//     let a=5
//     let b=6
//     console.log(a+b)

// }

// let answer=getRemainder(4,5)
// console.log(answer)
// // Add()

// // function Add(num1,num3){
// //    console.log(num1+num3)
// // }

// // Add(7,8)



// function getRemainder(a,b){
//     let remainder=a%b

// return remainder
// }



// here 4 and 5 are arguments


// create a function that can display multiplication table of 2


// function twotimesTable(num=2){

//     for(i=1;i<=10;i++){
//         let anser=i*2
// console.log(num,"x",i,"=",anser)}

// }


// twotimesTable()


// // create a function that can display n times table

//  function countdown(n) {
//   if (n === 0) {
//     console.log("Done!");
//     return;
//   }

//   console.log(n);
//   countdown(n - 1); 
// }

// countdown(5);

//  let abhit={
//     name:"Abhit",
//     age:'29',
//     college:"LBEF",
//     status:"single",

//  }


//  console.log(abhit.age)


// let studentsArray=["ram"]
// class room object
// grade, stutens, classteactName,captain,

// let classfiv={
//     grade:"5",
//     students:studentsArray,
//     classTeacher:"Sita Maam", 
// }


// create a menu represnting datas

// const school = {
//     name: "BhanuBhakta",
//     branch: [
//         {
//             name: "BhanuBhakta school",
//             teachers: [
//                 {
//                     name: "Ram",
//                     subject: "math",
//                     contact: {
//                         email: "Paasc",
//                         phone: "basd"
//                     }
//                 }, {
//                     name: "Ram",
//                     subject: "math",
//                     contact: {
//                         email: "Paasc",
//                         phone: "basd"
//                     }

//                 }
//             ],
//             class:[
//                 {
//                     name:"Nursery",
//                     students:[
//                     "sita","gita","ram"
//                     ]
//                 },
//                 {
//                     name:"LKG",
//                     name:"Nursery",
//                     students:[
//                     "sita","gita","ram"
//                     ]

//                 },
//                 {
//                     name:"Ukg",
//                     students:[
//                     "sita","gita","ram"
//                     ]
//                 }
//             ]
//         },
//         {


//         }
//     ],
    


// }


// console.log(school)





// const friends=[
//     "ram","shita","gita",
// ]



// friends.push("kritika")
// console.log(friends)
// let index=friends.indexOf("shita")
// console.log(friends)



// const colors = [
//     { name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", arrayIndex: 0 },
//     { name: "red", hex: "#FF0000", rgb: "rgb(255, 0, 0)", arrayIndex: 1 },
//     { name: "blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)", arrayIndex: 2 },
//     { name: "green", hex: "#00FF00", rgb: "rgb(0, 255, 0)", arrayIndex: 3 },
//     { name: "black", hex: "#000000", rgb: "rgb(0, 0, 0)", arrayIndex: 4 }
// ];


// for(i=0;i<colors.length-1;i++){
//     console.log(`hex value of color ${colors[i].name} is ${colors[i].hex}`)
// }
// console.log(`hex value of color ${colors[1].name} is ${colors[1].hex}`)

    //  - hex value of color red is #FF0000
    //  - hex value of color black is #000000


//     let students = [
//     {
//         roll: 1,
//         courses: ["Web", "Mobile"]
//     },
//     {
//         roll: 2,
//         courses: ["Machine Learning", "Mobile"]  // change mobile to Artificial intelligence via code
//     }
// ]


// students[1].courses[1]="AI"


// console.log(students)


// let persons = [
//     {
//         first_name: "john",
//         last_name: "Doe",
//         email:"john@gmail.com",
//         age: 10
//     },
//     {
//         first_name: "Rajesh",
//         last_name: "Hamal", 
//          email:"rajesh@gmail.com",
//         age: 20
//     },
//     {
//         first_name: "John",
//         last_name: "Wick",
//           email:"john2@gmail.com",
//         age: 30
//     },
// ]
/* 

output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick  and age is 30.
// */
// function checkEMail(userEmail){
//     let userNotFount=true
// for(let i=0;i<persons.length;i++){
//     let user=persons[i]
//     if(userEmail===user.email){
//         console.log(`this use is available`)
//         console.log(`user details are first:${user.first_name} and last name is ${user.last_name}`)
//         userNotFount=false
//     }
// }

// if(userNotFount){
// console.log("user with this email is not found")
// }


// }

// checkEMail("john2@gmail.com")




// let name="skillspark"
    // let name="skillSparK"
    // console.log(name.includes("n"))

// console.log(name.split(" "))
// let upperCase=name.toUpperCase()
// let lowerCase=name.toLowerCase()
// console.log(lowerCase)
// console.log("   hello   ".trim());  
// console.log("Hello".concat(" ", "World"));  




// let persons = [
//     {
//         first_name: "john",
//         last_name: "Doe",
//         email:"john@gmail.com",
//         age: 10
//     },
//     {
//         first_name: "Rajesh",
//         last_name: "Hamal", 
//          email:"rajesh@gmail.com",
//         age: 20
//     },
//     {
//         first_name: "Anmol",
//         last_name: "Wick",
//           email:"john2@gmail.com",
//         age: 30
//     },

// ]



// let per={fname:"John", lname:"Doe", age:25}; 


// console.log(`${per.fname}${per.lname}${per.age}`)


// let firstNameArray=[]


// persons.forEach((el)=>{
// firstNameArray.push(el.first_name)
// })



// console.log(firstNameArray)
// firstNameArray.forEach((name)=>console.log(name))




// let persons = [
//     {
//         first_name: "john",
//         last_name: "Doe",
//         email:"john@gmail.com",
//         age: 10
//     },
//     {
//         first_name: "Rajesh",
//         last_name: "Hamal", 
//          email:"rajesh@gmail.com",
//         age: 20
//     },
//     {
//         first_name: "Anmol",
//         last_name: "Wick",
//           email:"john2@gmail.com",
//         age: 30
//     },

// ]


// let firstNameArray=persons.map((el)=>{
// return el.first_name
// })






// Use map to return an array of objects with a new property added to each.




let persons = [
    {
        first_name: "john",
        last_name: "Doe",
        email:"john@gmail.com",
        age: 10,
        
    },
    {
        first_name: "Rajesh",
        last_name: "Hamal", 
         email:"rajesh@gmail.com",
        age: 20
    },
    {
        first_name: "Anmol",
        last_name: "Wick",
          email:"john2@gmail.com",
        age: 30
    },

]






// const personswithSchool=persons.map((person)=>{
// person.school="Skillspark"
//     return  person
// })


// console.log(personswithSchool)


// marks=[60,50,40,20,90]



// Use map to convert an array of students' marks into “Pass” or “Fail” based on ≥ 40.

//  return new array of pass marks 

// newpassmarks=marks.map((marks)=>{
// if(marks>=40){
//     return marks
// }else{
//     return null
// }
// })


// console.log(newpassmarks)




// let newmarks=marks.filter((el,index,marks)=>{
//     return el>40
// }


// )


// console.log(newmarks)

marks=[1,2,2,1,3,,5,3]

const reducedvalue=marks.reduce((acum,el)=>{
acum[`${el}`]=(acum[el] || 0) + 1;
return acum
},{})

console.log(reducedvalue)
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6]
];


const merged = arrays.reduce((acc, arr) => {
    return acc.concat(arr)
}, []);

console.log(merged)
