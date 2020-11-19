"use strict";

// Написать функцию makeAdder, которая должна работать следующим образом:
// let adder = makeAdder();
// adder() // 0
// adder (2) //2
// adder (10) // 12


// 2) Написать функцию createCounter, которая будет работать следующим образом.

// let counter = createCounter(10);
// counter.gerCurrent() // 10;
// couner.increment() // 11
// counter.gerCurrent() // 11;
// counter.decrement() // 10;
// counter.decrement() // 9;
// counter.gerCurrent() // 9;
// counter.setValue(90) // 90
// counter.gerCurrent() // 90;
// counter.reset() // 10; // reset to initial value that was passed to createCounter function
// counter.gerCurrent() // 10;


// 1)Написать функцию makeAdder

function makeAdder() {
    let value = 0;
    return function (elem) {
        return !elem ? elem = 0 : value += elem;
    }
};

let adder = makeAdder();

console.log(adder());
console.log(adder(2));
console.log(adder(10));

// 2) Написать функцию createCounter

function createCounter(elem) {
    let initialValue = elem;
    let value = initialValue;
    return {
        gerCurrent() {
            return value;
        },
        increment() {
            return ++value;
        },
        decrement() {
            return --value;
        },
        setValue(item) {
            return value = item;
        },
        reset() {
            return value = initialValue;
        }
    };
};

let counter = createCounter(10);

console.log(counter.gerCurrent());
console.log(counter.increment());
console.log(counter.gerCurrent());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.gerCurrent());
console.log(counter.setValue(90));
console.log(counter.gerCurrent());
console.log(counter.reset());
console.log(counter.gerCurrent());