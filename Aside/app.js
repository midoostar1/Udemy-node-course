var a = 1;
var b = 2;
var c = a + b;
console.log(c)


//function statement
function greet(){
    console.log('hi')
}
greet();

//function are first -class
function logGreeting(fn){
fn();
}

logGreeting(greet)


//function expression
var greetMe = function(){
    console.log('hi Mido');
}

greetMe();
    

//