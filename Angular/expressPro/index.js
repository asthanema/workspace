const express=require('express');

const app=express();

app.listen(3000,()=>{
    console.log("server is up at [3000]");
})

app.use(express.json())
app.get('/hello',(req,res)=>[
    res.send("<h2>Hellooooo</h2>")
])

app.get('/users',(req,res)=>
{
    let users=[
        
            {id:'1',name:'Astha',username:'astha16',email:'16asthanema@gmail.com'},
            {id:'2',name:'Khusboo',username:'Khus03',email:'khusboobhasne@gmail.com'},
            {id:'3',name:'Shivanee',username:'shivanijijji',email:'shivani@gmail.com'},
        
    ]
    res.json(users);
});

app.post('/users',(req,res)=>{
    console.log(req.body);
    res.send('OK');
})