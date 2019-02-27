var nums=[1,2,3,4,5];
var sqnums=num.map(function(n){     //sqnums is an array which contains all the squares for each
    return n*n;                   //element in array.The function is getting called for each element
                                  //of array.map always returns an array.

});
console.log(sqnums);