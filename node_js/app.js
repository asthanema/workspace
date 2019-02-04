var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    
    var skills=[{name:'React'},
                {name:'Angular'},
                {name:'Node'}];

// res.send("<h1>Welcome to Express</h1>");.....sending directly data as string.
res.sendFile('login.html',{root:__dirname})//....sending data from file
//res.json(skills);       
});                           //sending data as json array




app.post('/login',function(req,res){
    console.log(req.body);
    res.send("success");
})

app.listen(5000,()=>{
    console.log("Server running at port 5000");
})
