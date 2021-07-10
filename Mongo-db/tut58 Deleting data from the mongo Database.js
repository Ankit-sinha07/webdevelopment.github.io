//------------------------------------------Deleting data in mongo db------------------------------------------------------------------
//show dbs
//use  Ankitsite
//show collections

db.items.find({price:12})

// Deleting one Data form DataBase
db.items.deleteOne({price:12})