var nums=[1,2,3,4,5]
var sqnums=nums.map(n=>n*n);
console.log(sqnums);

var search=nums.find(n=>{          //seraching for 3,if n==3 return 3.
    return n==3;                      
})

// var search=nums.find(n=>n==3);  or in a single line using arrow function   
console.log(search);

var arr=[1,5,9,9,9,5,6,7,9]
var fil=arr.filter(n=>n==9);
console.log(fil);