
function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by calling outerFunction and assigning the result to a variable
  let closureFunction = outerFunction();
  
  // Call the closureFunction, which still has access to outerVariable
  closureFunction(); // Output: I am from the outer function