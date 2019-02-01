

var fs=require('fs');
fs.mkdir('temp1',function(err){
    if(err){
        console.log("Error:"+err);
    }
    else{
        fs.exists('temp1',function(exists){
            if(exists){
                process.chdir('temp1');
                fs.writeFile('test.txt','This is written using fs.writeFile',function(err){
                    if(err){
                        console.log("Error:"+err);
                    }
                    else{
                        fs.readFile('test.txt',function(err,data){
                            if(err){
                                console.log("Error:"+err);
                            }
                            else{
                                console.log(data.toString());
                            }
                        })
                    }
                })
            }
            else(console.log("temp already exists"));
        })
    }
})