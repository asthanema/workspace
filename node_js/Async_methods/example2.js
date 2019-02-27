// var http=require("http");
function acceptInfo(name,callback){
    age="21";
    callback(null,name,age)

}
function printInfo(err,info,age){
    if(err){
        console.log("error is :"+err);
    }
    else
    
 console.log("hello "+info+" your age is "+age);

}






acceptInfo("astha",printInfo);
acceptInfo("khushboo",printInfo);
acceptInfo("shivani",printInfo);
acceptInfo("ayushi",printInfo);
acceptInfo("surbhi",printInfo);
acceptInfo("akki",printInfo);


