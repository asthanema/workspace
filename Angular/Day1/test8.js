function sayHello(cb){
    setTimeout(()=>{
        cb("Hello");

    },2000);

}

sayHello((msg)=>{
    console.log(msg);
})
console.log("Good day");
console.log("Hiii");

function add(a,b,cb){
    let res=a+b;
    cb(res);
}

add(10,20,r=>
    console.log(r)
);

