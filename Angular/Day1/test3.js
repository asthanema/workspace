function add(a,b,callback){
    let res=a+b;
    callback(res);
}
add(25,25,function(r){
    console.log(r);
});