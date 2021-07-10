const express = require("express")
const path = require("path")
const app = express ()
const port = 80

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('devlop', { title: 'The Great Ankit Kumar Sinha is here', message: 'Hello there and thanks for telling me how to use pub Jai Hind!' })
});


//----------getRequest------------

app.get("/",(req,res)=>{
    res.send("This is the from getRequest (HOMEPAGE) application I am wirting using express")
})

app.get("/about",(req,res)=>{ 
    res.send("This is the from getRequest (AboutPage) application I am wirting using express")
})

app.get("/this",(req,res)=>{
    res.status(404).send("404 Not Found!")
})

//for sending status code-------------------
app.get("/",(req,res)=>{
    res.status(200).send("This is from status(200).send getRequest (HOMEPAGE) application I am wirting using express")
})


//----------------postRequest------
app.post("/",(req,res)=>{
    res.send("This is the from postRequest (HOMEPAGE) application I am wirting using express")
})

app.post("/about",(req,res)=>{
   res.send("This is the from postRequest (AboutPage) application I am wirting using express")
})

app.post("/this",(req,res)=>{
    res.status(404).send("404 Not Found!")
})


app.listen(port,()=>{
    console.log(`Application runs sucessfully on port ${port}`)
})

