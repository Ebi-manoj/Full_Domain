'use strict';

/////  JIT (Just-In-Time Compiler)////
// A hybrid of compiler & interpreter.
// Code starts running like an interpreter but compiles frequently used parts into machine code on the
// fly for speed.

////Lexical scope////
//Lexical scope means variable access is determined by where the code is written, not where it’s called.

////Lexical Environment////
// A hidden object created every time a function is executed, containing:
// Environment Record – Stores variable & function declarations of that scope.
// Reference to Outer Lexical Environment – Links to its parent scope.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//HOISTING IN JAVASCRIPT
//(when a varibales and functions are moved to their top of their context during the compilephase before the code executes)

/////////////
//VAR ---varibles decalred with var hoisted to the top and initialized with undefined
//LET ---variables declared with let hoisted to the top and not initialized ,it stays in TDZ
//Accessing varibales in TDZ gives refrence error (TDZ=time gap between hoisted and variable into their scope)

// console.log('Before', var_variable);
// console.log('Before', let_variable);
var var_variable = 'var';
let let_variable = 'let';
// console.log('After', var_variable);
// console.log('After', let_variable);

////////////////////////////////////////////
///Using strict mode allows you to be code in stricter version of javscript
//means this keyword will be undefined in functions
//no duplicate params
//cannot do a=10 dont create global varibales with var
// a = 10;

////////////////////////////////////
////for in loop
//gives you the key of object
const person = { name: 'Ebi', age: 10 };
for (const key in person) {
  console.log(key);
}
