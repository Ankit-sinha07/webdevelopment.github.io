//--------------------------------------Updating data in mongo DataBase---------------------------------------//

//---------UpdateOne is used for update one FILE in mongo-------------------//
db.items2.updateOne({name:"pocoF1"},{$set:{price: 1000}})

//---------UpdateMany is used for update more than one FILE in mongo-------------------//
db.items2.updateMany({name:"pocoF1"},{$set:{price: 1000, rating: 5}})