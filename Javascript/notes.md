#### HOW JAVASCRIPT WORKS

- When we run the code, a Execution context will be created ,at first it will be called global execution context
  where consist of all variables and function that present inside our code

- In next step ,Two phases will begin,
- MEMORY ALLOCATION AND CODE EXECUTION PHASE
  In memory allocation phase JS will give memory to all variables and this where hoisting happens
  In Code execution Phase JS will execute the code line by line

- Whenever javscript code runs a global execution context is created and a global object is also created
  with respective to differenc environment such as browser,nodejs there will be difference in global object

---In browser ,the global object is WINDOW object

- Whenever a execution context created javascript will also create a this keyword for that context,
  In global EC ,this points to Window object,In function context this points to undefined ('In strict mode')

#### LEXICAL ENVIRONMENT

- Lexical environment is the local memory + lexical environment of parent

- Here the function c lexical environment is the local memory of function c + lexical environemnt of b that means local of memory of b +its lexical environment and this chain goes when reach global execution context because it lexical points to null

- In a simpler way lexical environment is nothing but just where the code is physically present not where we use it ,means in the case of function c it is lexical sitted that is nexted inside the function b

- With this reason, if we access a variable in c JS will look that variable in the c local memory if not found it will look through its lexical enviroment and this chain goes when lexical environment becomes null, This is Called SCOPE CHAIN.

``
function a(){

function b(){

     function c(){

     }

}

}
``

##### APPLICATION OF CLOSUER

-Closure is a function which bundled together with its lexical environment
means the inner function still have the reference to the variables of the outer function even the outer function executetion finished
APPLICATION INCLUDES:

- SetTimeout()
- Currying
- Module design patterns
- IIFE
- Mainting state in async functions
- Memoize
