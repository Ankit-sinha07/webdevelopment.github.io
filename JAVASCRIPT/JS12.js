//alert("This is Date & Time Script")


let date1 = new Date()
console.log(date1)

let date2 = new Date(1000)
console.log(date2)

//let newDate = new Date("2077-09-30")
//console.log(newDate)

//let newDate = new Date(year,month,date,hours,seconds,milliseconds)
let newDate = new Date()
console.log(newDate)

let year1 = newDate.getFullYear()
console.log("The year is "+ year1)

let dt = newDate.getDate()
console.log("The Date is "+ dt)

let mn = newDate.getMonth()
console.log("The Month is "+ mn)

let hr = newDate.getHours()
console.log("The Hours is "+ hr)

let sec = newDate.getSeconds()
console.log("The Seconds is "+ sec)



//we can setDate as well as year, time, secound and millisecond 
//newDate.setDate(15)
//console.log(newDate)

newDate.setDate(10)
newDate.setSeconds(10)
console.log(newDate)
setInterval(updateTime, 1000)

function updateTime(){
    time.innerHTML = new Date();
}


