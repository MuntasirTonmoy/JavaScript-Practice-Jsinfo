//* scope

// what is scope?

// what is block scope? if a variable declared inside a code block where will it be visible? use case of block scope.

// if we declare variable inside the {} of 'if', 'for', 'while' etc. where those variable are visible?

// for(let i = 5; i < 10; i++){} here we can see variable i is declared outside of block {}, where will it be visible?

//* closure
// What is a nested function? when we create a nested function can we access variable declared in the outer function?

// When we return a nested function and use the returned function elsewhere can it still access the outer function variable? How it works?

// What is lexical environment? how many parts lexical environment has? What each part do?

// What lexical environment associated with the whole script?

// when the script start what happened in a lexical environment? what does Uninitialized state mean for a variable? when a variable is defined in lexical environment?

// when the script start how a function declaration is processed in a lexical environment? How can we call a function before its declaration? is it works for function expression?

// When a function runs at the beginning of the call what happened? How lexical environment chain is created? When the code wants to access a variable what lexical environment search first?

// if a variable isn't found what happened in strict and non-strict mode?

// How all the function remember the lexical environment in which they were created? what is [[Environment]] property in a function? When [[Environment]] is set and can we change it?

// When we return a nested function and call the returned function from where its outer lexical environment reference is taken? if we change a variable in the return nested function where does the variable change? if we call returned nested function multiple time how it gets the changed value every time?

// What is closure? In js does all function naturally closure, how? is there any exception?

// How garbage collection works for lexical environment?

// if we return a nested function and use that returned function, is the lexical environment garbage collected?

// if we don't use outer function variable inside nested function and return it, when we use the returned function can the return function access outer function variable? if no then why?
