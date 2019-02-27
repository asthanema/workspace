function greater(n1,n2,callback){
    if(n1>n2){
        setTimeout(function(){
            callback(null,n1)},5000)
        
        }
        else{
        setTimeout(function(){
            callback(null,n2)},1000)
        }
        
    }
    function printResult(err,greaternum)
{
    console.log("greater number is"+greaternum);
}
greater(367,50,printResult)
greater(0,98,printResult)
greater(20,56,printResult)
greater(25,85,printResult)