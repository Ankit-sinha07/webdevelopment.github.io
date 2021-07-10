//---------------------------------Var & let-----------------------------------
/*var str1 = "This is string1"
var str1 = "This is string2"
console.log(str1)
let a = "a"  --->Global Scope in case of "let"
console.log(a)
{  ----> Blocked scope in case of "let"
let a = "a2"                                  
console.log(a)
}*/

//--------------------Constant-------------------------------------------------         
/* For using constant variable we use "const" hece it Cannot be changed
const a = "This can't be Changed"
console.log(a)*/


//-------------------if-else Statement-----------------------------------
/*let area = 279
console.log(area)
if(area>280){
    console.log("You can make a house")
}
else if(area==279){
     console.log("You can make a small House :)")
}
else{
    console.log("You Can't make a house")
}*/

//----------------------Switch-case------------------------------------------
const wood = 100
switch (wood) {
    case 100:
        console.log("The availabe Wood is 100")
        break;

    case 110:
            console.log("The availabe Wood is 110")
            break;
    
    case 120:
        console.log("The availabe Wood is 120")
        break;

    case 130:
        console.log("The availabe Wood is 130")
        break;    

    default:
        console.log("The availabe Wood is none")
        break;
}
 
alert("This is the JavaScript of var&let,constant,ifelse statement,switch case ")