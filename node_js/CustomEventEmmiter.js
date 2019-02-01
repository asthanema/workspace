var EventEmitter=require('events').EventEmitter;

function GetCount(maxIteration){
    var e=new EventEmitter();

    //emit events here
    process.nextTick(function(){
        var cnt=0;
        e.emit('start');
        var t=setInterval(function(){
            e.emit('count',++cnt);
            if(cnt==8){
                e.emit('error',cnt);    //advntage of event emitter over callbacks...
                                        //able to read half of the data and then error
                clearInterval(t);
            }
            if(cnt==maxIteration)
            {
                e.emit('finish',cnt)
              clearInterval(t);

            }
        },1000)
    });
    return e;
}
var evt=GetCount(10);
evt.on('start',function(){
    console.log("Loop started");
});
evt.on('count',function(c){
    console.log("Recieved:"+c);
});
evt.on('error',function(c){
    console.log(" Ended with Error,count as:"+c);
});
evt.on('finish',function(c){
    console.log("Ended without Error,count as:"+c);
});