var http=require('http');
var fs=require('fs');
var port=5000;
// var server=http.createServer(function(req,res){
//     console.log(req.method);
//     res.statusCode=200;
//     res.setHeader("Content-Type","text/html");      //we are giving hardcoded data....we can 
                                                        //read from a file and display
//     res.end("<h1>Hello from Node server</h1>");

// });


var server=http.createServer(function(req,res){
  fs.readFile(__dirname+  '/index.html',function(err,data){    //reading response from a file 
                                                               //index.html   
      if(err){                                       
          console.log("error is:"+err);
      }
      else{
          res.writeHead(200,{'Content-Type':'text/html'});
          return res.end(data)
      }
  });
});
 server.listen(port,'127.0.0.1',()=>{
     console.log('Server running at port number '+port);

});