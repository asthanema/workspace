async function toUpper(stringarr){
    if(stringarr.length<1)
    throw new Error("Invalid No.");
    return stringarr.map(n=>n.toUpperCase())
}

async function print(){
    result=await toUpper(["astha","khusboo","shivanee"]);
    console.log(result);
}
print();
