// Synchronous or blocking:- 
// line  by line Execution
/*const fs = require("fs")
const text = fs.readFileSync("text.txt","utf-8")
console.log("Test case 1 Running")*/


// Asynchronous or non-blocking 
// line by line execution not guaranteed 
// For running Asynchronous or non-blocking we have to write a Function
// callback will fire

const fs = require("fs")
fs.readFile("text.txt","utf-8", (error, data)=>{
    console.log(data)
})
console.log("This is message:-")




