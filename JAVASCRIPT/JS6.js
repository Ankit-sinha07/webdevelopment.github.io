console.log("This is a Function JavaScript")

let car1 = "BMW"
let car2 = "LEMBORGINI"
let car3 = "ROYAL ROYCE"
let car4 = "NISSAN SKYLINE"
let sound = "Vroom Vroom"

//------------------Function Method for printing JavaScript----------//
function FastCar(car,sound){
    console.log(car + " is a fast car")
    console.log(car + " goes " + sound)
}

FastCar(car1,sound)
FastCar(car2,sound)
FastCar(car3,sound)
FastCar(car4, sound)

//-----------------Default method for printing JavaScript---------------//
/*console.log(car1 + " is a fast car")
console.log(car2 + " is a fast car")
console.log(car3 + " is a fast car")
console.log(car4 + " is a fast car")*/

//--------------Andding using Function-------------------------------//
let value = myfunction(10,2)
console.log(value)

function myfunction(a,b){
    let c = a + b
    return c 
}
//-----------------function for GreaterThen '>' And LessThen '<'-----------------------//

//--------GreaterThen-----------//
let greater = greaterthen(2,1)
console.log(greater)

function greaterthen(x,y){
    let z = x>y
    return z
}

//--------LessThen----------------//
let lesser = lessthen(1,2)
console.log(lesser)

function lessthen(i,j){
    let k = i<j
    return k
}

alert("This is a function JavaScript")