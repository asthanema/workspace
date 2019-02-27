async function add(a,b){
    if(a<0||b<0)
    throw new Error("Invalid No.");
    return a+b;
}
                                      //latest feature of ES7....async function automatically
                                       //converts it to a promise we dont have to write it.
async function test() {
    try{
    let res=await add(1,20);
    console.log(res);           
}       
catch(e){
console.log(e);
}          
}                         //await can only be used in async function.
test();