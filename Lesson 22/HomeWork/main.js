"use strict";

// 1) Написать функцию, которая на вход принимает строку,
//  возвращает массив чисел, которые являются граничными,
//   то есть не внутри текста.

function foundNumbers(string) {
    let arrNumbers = [];
    const re = /(\s|^)\d+\s/g;
    string.match(re).forEach(num => arrNumbers.push(+num))

    return arrNumbers;
};  

console.log(foundNumbers("привет 12 ываыва34 98 3423ыавыа"));
console.log(foundNumbers("10 ываыв 8 234ы"));

// 2) Написать функцию для валидации api v4
//  адреса и описать как она работает, 
//  что делает конкретный символ на конкретной позиции регулярного выражения

function validApi(string) {
    const re = /^([0-9]{1}|[0-9]{1}[0-9]{1}|1[0-9]{1}[0-9]{1}|2[0-4]{1}[0-9]{1}|25[0-5]{1})\.([0-9]{1}|[0-9]{1}[0-9]{1}|1[0-9]{1}[0-9]{1}|2[0-4]{1}[0-9]{1}|25[0-5]{1})\.([0-9]{1}|[0-9]{1}[0-9]{1}|1[0-9]{1}[0-9]{1}|2[0-4]{1}[0-9]{1}|25[0-5]{1})\.([0-9]{1}|[0-9]{1}[0-9]{1}|1[0-9]{1}[0-9]{1}|2[0-4]{1}[0-9]{1}|25[0-5]{1})$/;
//     есть 4 группы разделенные точкой \.
//     в каждой группе говорим что значение должно быть равно [0-9]{1} - от 0 до 9
//     или | [0-9]{1}[0-9]{1} - от 0 до 99, или | 1[0-9]{1}[0-9]{1} - от 100 до 199,
//     или | 2[0-4]{1}[0-9]{1} - от 200 до 249, или | 25[0-5]{1} - от 250 до 255  
    return re.test(string);
}; 

console.log(validApi("137.0.0.0"));
console.log(validApi("127.0.155.10"));
console.log(validApi("127.0т155.10"));
console.log(validApi("256.1.1.1"));
console.log(validApi("255.1.1.1"));
console.log(validApi("255\.1.1.1"));