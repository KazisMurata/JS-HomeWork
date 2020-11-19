"use strict";

// Документ

// Создать список товаров (массив). У товара должно быть имя его цена и количество.
// Вывести этот список на страницу (имя, цена и количество должны быть выведены с новой строчки). 
// Для каждого второго товара сделать цвет фона серым.


let products = [
    {name: 'Apple', price: '5$', quantity: '100kg'},
    {name: 'Pineapple', price: '7.5$', quantity: '55kg'},
    {name: 'Watermelon', price: '4$', quantity: '28kg'},
    {name: 'Melon', price: '9$', quantity: '22kg'},
    {name: 'Potato', price: '6$', quantity: '13kg'},
    {name: 'Tomato', price: '3$', quantity: '54kg'},
    {name: 'Pear', price: '2$', quantity: '32kg'},
    {name: 'Strawberry', price: '4.5$', quantity: '44kg'},
];

function showList(list) {
    let ul = document.createElement('ul');
    let body = document.querySelector('body');

    for (let i = 0; i < list.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        for (const key in list[i]) {
            li.innerHTML += key +': '+ list[i][key] + '<br>';
        }
        if (i % 2) {
            li.style.backgroundColor = 'grey';
        }
        
    }

    body.append(ul);
};

showList(products);



// Методы массивов.

// С помощью метода reduce необходимо перебрать массив и составить объект,
//  у которого ключ — уникальный элемент массива, значение — сколько раз он
//   встречается в массиве. Например, перебирая массив
//  ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'] 
//   мы получим {ololo: 3, anna: 2, red: 1, qwe: 1]


let arr = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];

let result = arr.reduce(function (accumulator, currentValue) {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    };

    return accumulator;
}, {});


console.log(result);

