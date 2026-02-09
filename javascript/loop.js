// // // // while loops
// // // // Loops help to make programs repeat actions, used in games, apps and automation.Loops
// // // // Syntax
// // // // for(statement,; condition; step){
// // // //     // code to repeat
// // // // }

// // // // eg

// // // for (let i = 3; i<=10; i++){
// // //     console.log(i);
// // // }

// // // // Printing number from 1 to 10;

// // // for (let numbers = 1; numbers<=10; numbers++){
// // //     console.log(numbers)
// // // }

// // // // Printing even numbers
// // // for (let numbers = 1; numbers <=10; numbers ++){
// // //     if (numbers % 2 === 0){
// // //         console.log(numbers)
// // //     }
// // // }

// // // // multiplication table

// // // for (let n = 1; n <=10; n++){
// // //     let row ="";
// // //     for( let m = 1; m <= 10, m++){
// // //         row += (n * m)
// // //     }
// // //     console.log(row).toString().padStart(4,"")

// // // }




// // // // The purpose of a for loop is to run the same code repeatedly while automatically controlling when it starts, stops, and how it changes each time.

// // let num = Number(prompt("Enter a Number"));

// // if(num > 0){
// //     console.log("The number is Positive" , num)
// //   }else  if(num - 0){
// //     console.log("The number is Negative" , num)
// // }else if(num === 0){
// //     console.log("The number is zero ", num)
// // }else if( num % 2 === 0){
// //     console.log("The number is even ", num)
// // }else if(num % 2 !== 0){
// //     console.log("The number is ")
// // }


// // week 1 summary
// __________________________________________________________

// # 📘 WEEK 1 – COMPLETE SUMMARY + ALL PROGRAMS

// **Theme:** Programming Fundamentals & Logical Thinking (JavaScript)

// ---

// ## 🟦 Day 1 – Output & Program Execution

// ### 📌 Concepts

// * `console.log()`
// * Statements
// * Execution order (top → bottom)

// ### 💻 Program: About Me Printer

// ```js
// console.log("Name: Joe");
// console.log("Age: 25");
// console.log("Reason: I want to learn and understand programming such that i can be able to work on any project");
// ```

// ### 🧠 What This Taught You

// * How to communicate with the computer
// * Code runs exactly as written
// * Difference between text and numbers

// ---

// ## 🟦 Day 2 – Variables & Data Types

// ### 📌 Concepts

// * Variables (`let`)
// * Strings, Numbers, Booleans
// * Reusability

// ### 💻 Program: Profile Generator

// ```js
// let name = "Joe Seed";
// let age = 17;
// let country = "Honolulu";
// let isLearningJavascript = true;

// console.log("Your Name is: " + name);
// console.log("Your Age is: " + age);
// console.log("Your Country is: " + country);
// console.log("You're Learning Javascript: " + isLearningJavascript);
// ```

// ### 🧠 What This Taught You

// * Store values once, reuse anywhere
// * Programs become flexible
// * Data has types

// ---

// ## 🟦 Day 3 – User Input

// ### 📌 Concepts

// * `prompt()`
// * Input → Logic → Output
// * `null`

// ### 💻 Program: Interactive Profile Builder

// ```js
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// let country = prompt("Enter your country:");

// console.log("Name: " + name);
// console.log("Age: " + age);
// console.log("Country: " + country);
// ```

// ### 🧠 What This Taught You

// * Programs can interact with users
// * User input is always a string
// * Programs don’t assume — they receive

// ---

// ## 🟦 Day 4 – Conditions (if / else)

// ### 📌 Concepts

// * Decision making
// * Comparison operators
// * Condition order

// ### 💻 Program: Age Classifier

// ```js
// let age = Number(prompt("Enter your Age"));

// if (age <= 13) {
//     console.log("Child");
// } else if (age <= 17) {
//     console.log("Teen");
// } else {
//     console.log("Adult");
// }
// ```

// ### 🧠 What This Taught You

// * Programs follow decision trees
// * Order of conditions matters
// * Only one logical path runs

// ---

// ## 🟦 Day 5 – Logical Operators

// ### 📌 Concepts

// * `&&` (AND)
// * `||` (OR)
// * Range checking

// ### 💻 Program: Student Grading System

// ```js
// let score = Number(prompt("Enter student's Score"));

// if (score >= 80 && score <= 100) {
//     console.log("A");
// } else if (score >= 60 && score <= 79) {
//     console.log("B");
// } else if (score >= 40 && score <= 59) {
//     console.log("C");
// } else {
//     console.log("Fail");
// }
// ```

// ### 🧠 What This Taught You

// * Combining conditions
// * Validating ranges
// * Real-world decision logic

// ---

// ## 🟦 Day 6 – Loops

// ### 📌 Concepts

// * `for` loops
// * Iteration
// * Nested loops

// ### 💻 Program 1: Basic Loop

// ```js
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// ```

// ### 💻 Program 2: Multiplication Table (Advanced)

// ```js
// for (let i = 1; i <= 10; i++) {
//     let row = " ";
//     for (let j = 1; j <= 10; j++) {
//         row += (i * j).toString().padStart(6, " ");
//     }
//     console.log(row);
// }
// ```

// ### 🧠 What This Taught You

// * Avoid repetition
// * Automate tasks
// * Think in patterns
// * Nested logic (advanced skill)

// ---

// ## 🟦 Day 7 – Logic Integration & Debugging

// ### 📌 Concepts

// * Separating logic
// * Debugging
// * Edge cases

// ### 💻 Program: Smart Number Analyzer

// ```js
// let num = Number(prompt("Enter a number"));

// // Sign check
// if (num > 0) {
//     console.log("The number is Positive:", num);
// } else if (num < 0) {
//     console.log("The number is Negative:", num);
// } else {
//     console.log("The number is Zero:", num);
// }

// // Even / Odd check
// if (num % 2 === 0) {
//     console.log("The number is Even");
// } else {
//     console.log("The number is Odd");
// }
// ```

// ### 🧠 What This Taught You

// * Not all logic belongs in one `if`
// * Independent checks must be separated
// * Structure is as important as syntax

// ---

// # 🧠 WEEK 1 – CORE SKILLS YOU BUILT

// By the end of Week 1, you can:

// ✔️ Think step-by-step
// ✔️ Translate rules into logic
// ✔️ Write conditions correctly
// ✔️ Use loops confidently
// ✔️ Debug logic errors
// ✔️ Read and reason about code

// This is **real programming foundation**.

// ---

// ## ✅ WEEK 1 STATUS

// 🟢 **FULLY COMPLETED & CONSOLIDATED**

// No gaps. No rushing. Solid base.

// ---


