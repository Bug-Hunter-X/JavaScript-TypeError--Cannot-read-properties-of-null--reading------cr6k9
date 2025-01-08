function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; 
  }
  return a + b; 
}
console.log(foo(1, undefined)); //Returns null
console.log(foo(1, 2)); //Returns 3
console.log(foo(null, 2)); //Returns null