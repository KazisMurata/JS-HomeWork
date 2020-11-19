"use strict";

// 1) Apply

function apply(fun, context, args) {
    return fun.call(context, ...args);
};

function say(a, b, c) {
    console.log(this);
    return `${this.name}, ${a} ${b} ${c}`;
}

let user = { 
    name: "John" 
};

console.log(apply(say, user, ["Hello", "my", "friend"] ));

// 2) Bind

function bind(fun, context, ...args) {
    return function(...funArgs) {
        let result = [...args].concat([...funArgs]);
        return fun.call(context, ...result);
    }
}

function f(a, b, c, d) {
    console.log(this);
    return a + b + c + d;
}

let obj = {
    name: "numbers",
}

let numbers = bind(f, obj, 1, 2);

console.log(numbers(3, 4));




// function x(...args) {
//     let a = args;
//     console.log(...a);
// }

// x(1, 2, 3, 4, 5, 6);

