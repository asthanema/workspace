

var request=require('request');
var fs=require('fs');
var src=request("http://www.google.com");// request returns event emitter object which
                                           // is thus stored in src.

var response=" ";

src.on('data',function(chunksOfData){  //data is request's predefined event listener
    console.log("<<<<<<DATA>>>>>>>");
    response+=chunksOfData.toString();
});
src.on('end',function(){
    console.log("<<<<<<<DONE>>>>>>>>")
    fs.writeFile('GoogleResponse.html',response,function(err){
        if(err){
            console.log("error:"+err)
        }
        else{
            console.log("you are done")
        }
    });
});