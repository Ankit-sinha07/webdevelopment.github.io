// Default way of writing a function---------------

/*function Greet() {
    console.log("Hello")
}Greet()*/

//writing Arrow function---------------------------//Basically it is a shot-cut Method of wiriting a function

let Greet = ()=>{
    console.log("Hello2")
}
Greet()

//--------------------------------------------------------

let ans = () =>{
    console.log("Greeting to the user")
}
ans()

//--------------------------------------------------------

setTimeout(() => {
    console.log("This will run in setTimeout After 3sec")
}, 3000);

/*-----------------------------------------------------*/
//short-cut Method-------
let sum1 = (a, b) =>{
    return a+b
}
sum1()
//Super Short-cut Method-------

let sum2 = (a, b) => a+b

//-------------------

let half = a => a/2

//------------------

let answer = () => console.log("halo")

//-------------------------------------------------

setTimeout(() => console.log("HEHEH"), 2000)

//----------lexial This in Arrow function--------

//In "lecxial this" the arrow takes the function from parents "this" and it show the the parent value
let object1 ={
    Greeting: "Good moring and",
    name: ["Ankit","uttkarsh","skillf"],
    speak(){
            this.name.forEach((students)=>{
            (setTimeout(() => console.log(this.Greeting + " Hello genius " + students), 2000)
            )})
    }
}
object1.speak()

//In this the the child will takes it own function and shows the result
let object ={
    Greeting: "Good moring and",
    name: ["Ankit","uttkarsh","skillf"],
    speak(){
            this.name.forEach(function s (students){
            (setTimeout(() => console.log(this.Greeting + " Hello genius " + students), 2000)
            )})
    }
}
object.speak()


