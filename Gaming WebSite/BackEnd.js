const express = require("express")
const path = require("path")
const BackEnd = express()
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost:27017/supportGaming', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 90

//mongoose schema
const supportGaming = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    Address: String
  });

const support = mongoose.model('support', supportGaming);



BackEnd.use('/static', express.static('static')) // For serving static files
BackEnd.use(express.urlencoded())

// PUG SPECIFIC STUFF
BackEnd.set('view engine', 'pug') // Set the template engine as pug
BackEnd.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
BackEnd.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})
BackEnd.get('/support', (req, res)=>{
    const params = { }
    res.status(200).render('support.pug', params);
})


BackEnd.post('/support', (req, res)=>{
    var myData = new support(req.body)
    myData.save().then(()=>{
        res.send("Information is been save to the DataBase")
    }).catch(()=>{
        res.status(404).send("INFOEMATION SAVING ERROR")
    })
    //res.status(200).render('support.pug');
})


// START THE SERVER
BackEnd.listen(port, ()=>{
    console.log(`The BACKEND started successfully on port ${port}`);
});