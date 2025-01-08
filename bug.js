function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause a TypeError if called with undefined
  }
  return a + b;
}
console.log(foo(1, undefined)); //Throws TypeError