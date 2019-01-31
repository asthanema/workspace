var calc=require('./Math');//here calc is an object which points to 
//every method imported from math.js
var calc=require('./Math').Addition;

console.log("Addition is:"+calc.Add(20,30));

