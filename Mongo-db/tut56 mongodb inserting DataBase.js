// Inserting data in mongo db
//use  Ankitsite

// In this we can insertOne collection in mongo because we have used "insertOne" 
db.items.insertOne({name:
    "Apple iphone3s",
    price:12,rating:3.8, quantity:200,sold:100})

// In this we can insert more than one  collection in mongo because we have used "insertMany" 
db.items.insertMany([{name:"Apple iphone3s",price:12,rating:3.8, quantity:200,sold:100},{name:"onepluse7tpro",price:1110,rating:4.8, quantity:500,sold:200},{name:"pocoF1",price:1200,rating:4.9, quantity:1200,sold:100},{big:true}])