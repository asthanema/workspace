var http=require('http');
var port=8080;
var server=http.createServer(function(req,res){
    var friends=[{name:"astha",age:21},
                  {name:"khushboo",age:21},
                   {name:"jijji",age:50}];

    res.end(JSON.stringify(friends));
    // res.end("Hello Astha")
})
// http.get('/',(res)=>{
// })


server.listen(port,'localhost',()=>{
console.log("Server is listening at port number:6000")
})

