alert("This is a JavaScript of (loop's)")
alert("(This is for,while,forEach,for-of,do-while)")



//---------------for loop's in JavaScripts-------------------//

//----------for loop using Interger 

/*let a = 0
for(a=0;a<=3 ;a++){
    console.log("Output- "+ a)
}*/

//---------for loop using Array

/*let God = ["Shiv Ji", "Hanuman", "Saraswati", "kratos", "Ganesh Ji"]
for (let IN = 0; IN < God.length; IN++) {
    console.log("Worshiping god (Using Array)-> " +God[IN]) 
}*/

//Examples
/*let an = ["1-name", "2-naam", "3-nasha"]
for (let index = 0; index < an.length; index++) {
    console.log("Worshiping god-> " + an[index]) 
}

/*let stringArray = ["one", "two", "three", "four"]
for (var i = 0; i < stringArray.length ; i++) 
{
        console.log(stringArray[i])
}*/

//----------forEach loop--------------------------------------

/*let name = ["Ankit","Vishal","Moti","Sagun","Riya"]
name.forEach(function f(naam){
    console.log("Declaring Name (Using forEach) loop -> " + naam)
});*/

//------------------for-of Loop-----------------------------------

/*let character =["Trevor","Michle","Franklin","Lemar"]
for(element of character){
 console.log("Charater Name (Using for-of) loop-> " + element)
}*/

//-----------------------for-in Loop----------------------------

let VideoGame ={
    name:  "Assassin Creed",
    MoneyEarned: "$100000000000",
    Creator:"Ubisoft",
}
//We use this loop to itreate Over Objects in JavaScripts
for(key in VideoGame){
    console.log(`Declaring The ${key} of the VideoGame using (for-in Loop)-> ${VideoGame[key]}`)
}
 
//--------While Loop in JavaScripts---------
let a = 0
while(a<5){
     console.log(`${a} a is less then 5`)
     a++
}

//------do-while loop in JavaScript------------
 let b = 0
do{
    console.log(`${b} is less the 6`) 
    b++
}while(b<6)
