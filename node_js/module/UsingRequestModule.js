var request=require('request');
request('http://www.google.com',function(error,response,body){
    console.log('error:',error);
    console.log('status code:',response&&response.statusCode);
    console.log('body:',body);

})
console.log('program ended!!');