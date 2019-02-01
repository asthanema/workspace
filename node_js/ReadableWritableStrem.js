var fs=require('fs');
var readableStream=fs.createReadStream('Input.txt');
var writableStream=fs.createWriteStream('Output.txt');
 var allData=" ";
 readableStream.setEncoding("UTF-8");
 
 readableStream.on('data',function(chunks){
     allData+=chunks;
 });

 readableStream.on('end',function(chunks){
    writableStream.write(allData);
    writableStream.end();
    console.log(allData);
});
 

// readableStream.pipe(writableStream);......or in a single line we can perform the action of
                                             //reading and writing into output file.
                                            //