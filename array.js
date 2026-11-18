// const replacedSchool = school.replaceAll("c", "j")
// console.log(replacedSchool)

// write a program that converts a persons full name to firstName and last name

// const fullname = "femi jacob"

// const splitedName = fullname.split(" ")

// console.log(splitedName[0])

// const userAge = [3,4,7,9,22,7,9]

// const methodOutput = userAge.push(30)

// const methodOutput = userAge.unshift(40)
//  const methodOutput = userAge.concat([34,56,89])
// anonimous function

// //  const methodOutput = userAge.slice(-3,5)
//  const methodOutput = userAge.map(element=> element *4)

// console.log("old arrar:" ,userAge)
// console.log("new array:",methodOutput)

// write a program that returns the
// You are building a blog platform. When a writer types out tags or categories for their article, they use spaces. You need to convert these tag names into safe, lowercase "slugs" to use in the website's URL address bar.

// const generateSlug= (categories)=>{

// return categories.map(ele => ele.toLowerCase().replaceAll(" ","-"))
// }

// const output = generateSlug(["JavaScript Tutorials", "Web Development", "CSS Grid Tricks"])
// console.log(output)

// Problem Statement: Student Scores
// A school wants to develop a JavaScript program that automatically adds 5 bonus marks to every student's score.
// You are required to use the JavaScript map() method to create a new array containing the updated scores without modifying the original array.
// Requirements
// Create an array containing the scores of five students.
// Use the map() method to add 5 marks to each student's score.
// Store the new scores in a variable called updatedScores.
// Print both the original scores and the updated scores to the console.

// const studentScore = (scores)=>{
// return {
//     Originalscores:scores,
// Updatedscores: scores.map( e => e+5)
// }
// }

// const result  = studentScore( [45, 60, 70, 35, 80]
// )

// console.log(result)

// const studentScore = (scores) => {
//   const updatedScore = scores.map((e) => {
//     if (e <= 50) {
//       return e + 10;
//     } else {
//       return e;
//     }
//   });
//   return {
//     Originalscores: scores,
//     Updatedscores: updatedScore,
//   };
// };

// const result = studentScore([45, 60, 70, 35, 80]);

// console.log(result);

// const fruits = ["mango", "orange", "apple", "pineapple"]

// const newFruits = fruits.filter((el) => el.includes("e"))

// console.log(newFruits);

// 10/15/2026 class

// const country = "Nigeria"
// const checkIfR = country.includes("n")

// const checkKiwi = fruits.includes("cashew")
// console.log(checkKiwi)
// const studentScore = (scores)=>{
//    const updatedScore = scores.map(
//     (e)=>{ if(e <= 50 ){
//       return   e +10
//     }else{
//         return e
//     }
// }
// )
// return {

//     Originalscores:scores,
// Updatedscores: updatedScore
// }
// }

// const result  = studentScore( [45, 60, 70, 35, 80]
// )

// console.log(result)

// const scores = [ 20,30,45,65,83,69,24,87,21,10,16,19]

// const evenScore = scores.filter((ele )=> ele % 2 >0)

// console.log(evenScore)

//const fruits = ["pawpaw","mango","cashew","pineapple","cherry","watermelon"]

//  const fruitsWithe = fruits.filter((josh)=> josh.includes("e"))

//find method
//  const fruitsWithe = fruits.find((josh)=> josh.includes("e"))

// console.log(fruitsWithe)
// const convertToUpper = fruits.map((e)=>e.toUpperCase())

//  const scores = [ 20,30,45,65,83,69,24,87,21,10,16,19]
// const sumAllElement = scores.reduce((previous,current)=> { return previous+current}, 0)

// console.log(sumAllElement)

// const  age = [2,56,10,3,15,8,3,6]

// const ageSort = age.sort((a,r)=>r -  a)

// console.log(ageSort)

const myName = (name) =>{
    return name.split(" ")[0].slice(0, 1) + name.split(" ")[1].slice(0, 1);
};

console.log(myName("Joshua Tech"));

