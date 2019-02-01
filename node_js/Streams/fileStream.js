var fs=require('fs');
fs.readFile('Data.txt',function(err,dataFromFile){//.....by default readFile method is async..
                                                   //to make it sync we need to use sync 
                                                   //vali method
    if(err){
        console.log("ERROR!:"+err);
    }
else{
    console.log('Reading File(Async):'+dataFromFile)
}
});
console.log("Program ended");// this is printed before the file data which shows that
                               //data is fetched asynchronously.

// var content=fs.readFileSync('Data.txt',"UTF-8")
// console.log(content);
// console.log("Program ended");