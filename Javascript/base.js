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
  //   console.log(key);
}

//////////////////////////////////////////
///CLOSURE
//closure is a combination of function bundled together with reference to its lexical environment
//Means inner function is still able to access variables in outer functions even they finsihed executing
///////PROS----Data encapsulation,state persistance
///////CONS-----Using to much memory and leads to memory leak

function outer() {
  let password = 'secret';
  return () => password;
}
const getPassword = outer(); //only way to access password(Data encapsulation) ,not possible to modify the password
// console.log(getPassword());

/////////////////////////////////////////////
///IIFE
(function runfirst() {
  console.log('Runs first');
})();

//////////////////////////////////////////
//GENERATOR FUNCTION
//Can return multiple values
//yield is used to pause and resume function
function* genrator(a, b) {
  yield a + b;
  yield a - b;
}

const fn = genrator(5, 6);

//////Counter using genrator function
function* counterGen() {
  let count = 1;
  for (let i = 1; i <= 3; i++) {
    yield count++;
  }
}

let count = counterGen();

//////////////////////////////////////////////////////////////////
/////Factory function

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`Hi ${this.name} of ${age} years old`);
    },
  };
}

const person1 = createPerson('Ebi', 20);
const person2 = createPerson('Nidhi', 21);

//////////////////////////////////////////////////
////PROTOYPE
///every objects shares __proto__ object that js attached automatically
///thats we got access to all methods when we create array or objects

const abc = ['abc', 'bb'];

///////////////////////////////////////////////////////////////////////////////
/////OBJECT METHODS

///Object.keys(),Object.values(),Object.entries()

//1)Object.freeze()
//prevent modification,deletion,adding new properties
//Only applicable for outer objects not for nested (shallow)

const statusCode = Object.freeze({
  OK: 200,
  CREATED: 201,
});

// 2) Object.seal()
//Slighlt less stricter allows adding or modifying not deleting (shallow)
const personSeal = Object.seal({
  name: 'Ebi',
  age: 10,
});

////////////////////////////////////////////////
//THIS KEYWORD

///This keyword refers to the context,this behave differently in diff context
//1)In global it is window object
//2) In function its undefined(strict mode only)
//3) In Object "this" is that object
//4) In constructor function this refers to that newly created Objects
//5) Arrow function doesnt have this keywords it inherit from the lexical scope

///////////////////////////////////////////////////////////
///CALL APPLY BIND
///these are used for function borrowing that means if we want to share a same function in different object we will use with call,apply,bind

//CALL
//it allows you to share function by passing parameter or wihtout params
//APPLY
//Same as CALL but allows you to pass params as in form of array
//BIND
//Same as CALL but allows you to invoke the function later

///Example

// let car = {
//   name: 'BMW',
//   top_speed: 300,
//   log: function () {
//     console.log(`${this.name} as  a top speed of ${this.top_speed}` );
//   },
// };
// let car2 = {
//   name: 'PORSCHE',
//   top_speed: 280,
// };

function car(name, speed) {
  this.name = name;
  this.top_speed = speed;
  this.log = function () {
    console.log(`${this.name} as  a top speed of ${this.top_speed}`);
  };
}

const car1 = new car('BMW', 200);
// car1.log();

/////////////////////////////////////////////////////////////////
////CURRYING
//Transforming a function that takes multiple arguments into series of functions that take each arguments

//Normal
// function multiply(a,b){
//     return a*b
// }

function multiply(a) {
  return b => {
    return a * b;
  };
}

// const multiply2 = multiply(2);
// console.log(multiply2(5));

////////////////////////////////////////////
///WEAK SET
//Its similar to set but only allows to store unique objects
//objects reference are weak means if there is no reference to that object it is possible to garbage collected
//Mainly used for efficiently manage memory,no refrence the weakset will clear the object from it,but this not possible in set,leads to high memory
const obj1 = { name: 'Ebi', age: 20 };
const obj2 = { name: 'Ebimanoj', age: 20 };
const weakset = new WeakSet();
weakset.add(obj1);
weakset.add(obj2);
// console.log(weakset.has(obj1));

//////////////////////////////////////////////////
/////Weak map
//similar to weak set but stored as key value pair and key(must be obj) is weak refrence

const weakmap = new WeakMap();
weakmap.set(obj1, 'Devloper');
weakmap.set(obj2, 'student');
// console.log(weakmap.get(obj1));
