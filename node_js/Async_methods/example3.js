function adder (n1,n2,callback)
{
    result=n1+n2;
    callback(null,result);
}
function printResult(err,sum){
console.log("the sum of given numbers is "+sum);
}




adder(20,16,printResult)
adder(20,10,printResult)
adder(20,50,printResult)
adder(20,60,printResult)
adder(20,56,printResult)