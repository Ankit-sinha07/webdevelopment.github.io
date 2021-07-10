//alert("this is JavaScript of setInterval & setTimeout")

//---------------setTimeout & clearTimeout-----------------------------

//Allows us to run the function '()' once after the Interval of time.
function meeting(user,khatamText){
    console.log("hello" + user + " " + khatamText)
    //alert("Hello")
}    

//setTimeout------------
//setTimeout(meeting, 5000," Ankit"," Khatam-tata-Bye-Bye" )

//setTimeout(meeting(),12000)-------->wrong as it is calling the function inside setTimeout

//clearTimeout--------------------------

/*timeOut = setTimeout(meeting,5000," Ankit"," Khatam-tata-Bye-Bye")
console.log(timeOut)//--> it will provide the ID of setTimeout
clearTimeout(timeOut)*/

//setInterval-----------------------------
//it will run everytime after the given second
//setInterval(meeting,1000," Ankit"," Khatam-tata-Bye-Bye");

/*intervalId = setInterval(meeting,1000," Ankit"," Khatam-tata-Bye-Bye");
clearInterval(intervalId)*/

function TimeDisplay(){
    time = new Date()
    console.log(time)
    document.getElementById("time").innerHTML = time   
}
setInterval(TimeDisplay,1000  )