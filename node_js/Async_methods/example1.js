

var maxTime=1000;
function EvenNumberDoubler(theNumber,theCallBack){
    var waitTime=Math.floor(Math.random()*maxTime+1)
    if(theNumber%2){
        setTimeout(function(){
            theCallBack(new Error('Odd Input!'))
        },waitTime);
    }
else{
    setTimeout(function(){
        theCallBack(null,theNumber*2)
    },waitTime);
}
}
function Processresult(err,result){
    if(err){
        console.log('Error:'+err.message);
    }
    else{
        console.log('Result:'+result);
    }
}



EvenNumberDoubler(10,Processresult);
EvenNumberDoubler(20,Processresult);
EvenNumberDoubler(30,Processresult);