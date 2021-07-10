// Searching data in mongo db
//use  Ankitsite

//This query will return all the object who's rating is 4.8
db.items.find({rating:4.8})

//-----------------use this query for greater than equal to 3.8
db.items.find({rating: {$gte: 3.8}})
//-----------------use this query for less than equal to 3.8
db.items.find({rating: {$lte: 3.8}})

//----------------use this query for greater than 3.8
db.items.find({rating: {$gt: 3.8}})
//----------------use this query for less than 3.8
db.items.find({rating: {$lt: 3.8}})


//-----And operator--------//
db.items.find({rating: {$gt: 3.8},price:{$gt:12}})


//-----or operator----------//
db.items.find({ $or:[{rating: {$gt: 3.8}},{price:{$gt:12}}]})

//-----projection operator----------//
db.items.find({rating: {$gt: 3.8}},{ratin:1})