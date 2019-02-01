var express=require('express');
var app=express();
var router=express.Router();
router.route('/products').get(function(req,res){
    var products=[
        {name:'mobile',price:20000},
        {name:'tv',price:30000},
        {name:'laptop',price:50000}
    ];
   
    var pname=req.params.name;
    var theProduct=products.find(function(f){
        f.name==pname;
    });
    if(theProduct)
    { res.json(theProduct)}
    else{res.json(products);}
});
app.use('/',router);
app.get('/',function(req,res){
    res.sendFile('serverfile.html',{root:__dirname});
});
app.listen(5000,()=>{
    console.log("server is listening at port number 5000")
});