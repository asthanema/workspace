function square(n){
    let p=new Promise((resolve,reject)=>{
        if(n.length<1)
        reject("Empty Arrray");
        else{
        res=n.map(n=>n*n);
        resolve (res);
        }
    });
    return p;
}

function inc(sqnum){
    let p=new Promise((resolve,reject)=>{
        incarr=sqnum.map(sqnum=>sqnum+1);
        resolve(incarr);
    })
    return p;
}

var nums=[1,2,3,4];
square(nums).then(r=>inc(r).then(x=>console.log(x)));
