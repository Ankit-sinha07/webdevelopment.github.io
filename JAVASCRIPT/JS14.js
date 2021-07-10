//alert("MathObject in JavaScript")
let m = Math
console.log(m)


// Printing the Constants from Math Object--------------------------
console.log("The value of Math.E is ", Math.E )
console.log("The value of Math.LN2 is ", Math.LN2 )
console.log("The value of Math.LN10 is ", Math.LN10 )
console.log("The value of Math.LOG2E is ", Math.LOG2E )
console.log("The value of Math.LOG10E is ", Math.LOG10E )
console.log("The value of Math.PI is ", Math.PI )
console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2 )
console.log("The value of Math.SQRT2 is ", Math.SQRT2 )

// Printing the Function from Math Object--------------------------

//Round Function
let a = 36.458955
let b = 80
console.log("The value of A and B is", a, b)
console.log("The value of A and B is", Math.round(a), Math.round(b))

//Pow Function
console.log("5 raised to the power of 3 is ", Math.pow(5,3))

//SQRT function
console.log("The Square Root of ",Math.sqrt(36))

//ceil and floor function
console.log("5.8 round up to the nearest integer",Math.ceil(5.8))
console.log("5.8 round down to the nearest integer",Math.floor(5.8))

//Trigonometric function
console.log("the value of sin(pi) is " ,Math.sin(Math.PI/2))
console.log("The value of tan(pi) is", Math.tan(Math.PI))

 //Min and Max function
console.log("the Minimum value of 10,11,12 is -",Math.min(10,11,12))
console.log("the Maximum value of 10,11,12 is -",Math.max(10,11,12))

//Generating a Random number-----------------------------
let r = Math.random()
console.log("The Random number is-", r)

//Generating Random number b/w (a1 & b1) form 1 to 100.  formula = a1 + (b1-a1)*Math.random() 
let a1 = 1
let b1 = 100
let r1_100 = a1 + (b1-a1)*Math.random()
console.log("The Random number is-", r1_100)






