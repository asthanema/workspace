function greet(){
    return function(){
        return "Hello";
    }
}

// var msg=greet();...............either we use this way or as written below.....as we are 
// console.log(msg());               calling a function which returns a function.

var msg=greet()();      
console.log(msg);
