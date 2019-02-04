var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/employees',(req,res)=>{
//connect to mongodb
//use Mongoclient->pkg mongodb
//get the records
//pass the collection to view to render
var url="mongodb://localhost:27017" //connection
var MongoClient=mongodb.MongoClient
MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
if(err){
  console.log(err);
}
else{
  var collection=db.db('employees').collection('employees');
  //select * from employees;
  collection.find({}).toArray((err,result)=>{
    if(err){
      console.log(err);
    }
    else if(result.length){
    //res.json(result);
    res.render('employees',{employee:result})
    }
  });//eof toArray
}
})
});
module.exports = router;
