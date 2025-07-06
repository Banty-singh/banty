// create a faulty calculator using js

/*

+ ===> -
* ---> +
- --->/
/ ---> **
 with 10 % error
*/
let error = Math.random()
console.log(error)
let num1 = parseInt(prompt(("enter the  number")))
let num2 = parseInt(prompt(("enter the second number")))
let oper = prompt("Enter the operation")

// let store = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",

// }
// if (oper == "+" && error > 0.5) {
    // res = num1 - num2;
    // or_res = num1 + num2;
    // let display = (oper == "+" && error > 0.5) ? num1 + num2: num1 - num2;
    // console.log(`the ${oper} between ${num1} and ${num2} is ` + display);
// } else if (oper == "-" && error > 0.5) {
    // res = num1 / num2;
    // or_res = num1 - num2;
    // let display1 = (oper == "-" && error > 0.1) ? num1 - num2 : num1 / num2;
    // console.log(`the ${oper} between ${num1} and ${num2} is ` + display1);
// }
// else if (oper == "*" && error > 0.5) {
    // res = num1 - num2;
    // or_res = num1 / num2;
    // let display2 = (oper == "*" && error > 0.5) ? num1 / num2 : num1 - num2;
    // console.log(`the ${oper} between ${num1} and ${num2} is ` + display2);

// } else if (oper == "/" && error > 0.5) {
    // res = num1 - num2;
    // or_res = num1 ** num2;
    // let display3 = (oper == "/" && error > 0.5) ? num1 ** num2 : num1 - num2;
    // console.log(`the ${oper} between ${num1} and ${num2} is ` + display3);
// }
// function calculate(oper) {
    
    
    // if (oper == "+" && error > 0.5) {
    //     res = num1 - num2;
    //     or_res = num1 + num2;
    //     let display = oper == "+" && error > 0.5 ? or_res : res;
    //     console.log(`the ${oper} between ${num1} and ${num2} is ` + display);
    // } else if (oper == "-" && error > 0.5) {
    //     res = num1 / num2;
    //     or_res = num1 - num2;
    //     let display = oper == "-" && error > 0.1 ? or_res : res;
    //     console.log(`the ${oper} between ${num1} and ${num2} is ` + display);
    // }
    // else if (oper == "*" && error > 0.5) {
    //     res = num1 - num2;
    //     or_res = num1 / num2;
    //     let display = oper == "*" && error > 0.5 ? or_res : res;
    //     console.log(`the ${oper} between ${num1} and ${num2} is ` + display);

    // } else if (oper == "/" && error > 0.5) {
    //     res = num1 - num2;
    //     or_res = num1 ** num2;
    //     let display = oper == "/" && error > 0.5 ? or_res : res;
    //     console.log(`the ${oper} between ${num1} and ${num2} is ` + display);
    // }
// }
// calculate(oper)



// console.log(typeof num1)

// if(error>0.1){
//     console.log(num1+num2)
//     console.log(num1-num2)
//     console.log(num1*num2)
//     console.log(num1/num2)
// }
// if(error<0.1){
//     console.log(num1+num2)
//     console.log(num1-num2)
//     console.log(num1*num2)
//     console.log(num1/num2)
// }

