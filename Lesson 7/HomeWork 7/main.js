// Из массива пользователей получить массив их имен и массив возрастов.
// На основе первоначального создать новый массив пользователей которым есть 18 лет.
// Найти пользователя с конкретным именем и возрастом и его индекс в массиве.
// Для этого использовать встроенные методы массивов.



// Также написать свои функции map, filter, которые первым аргументом принимают
//  массив а вторым функцию колбек. По примеру forEach из лекции. 
//  Своими словами описать как эти функции работают и как будет происходить выполнение кода.

// Создать массив пользователей.

let users = [
    {name: "Jhon", sex: "male", age: 25},
    {name: "Luci", sex: "female", age: 23},
    {name: "Andy", sex: "male", age: 27},
    {name: "Jill", sex: "female", age: 28},
    {name: "Drake", sex: "male", age: 24},
    {name: "Jule", sex: "female", age: 17},
    {name: "Mindi", sex: "female", age: 18},
    {name: "Bill", sex: "male", age: 16},
    {name: "Tim", sex: "male", age: 16},
    {name: "Fiona", sex: "female", age: 17},
];


// 1. Из массива пользователей получить массив их имен и массив возрастов.

// function GetUserInfo(arr) {
//     this.arr = arr;

//     this.getName = function () {
//         return this.arr.map(item => item.name);
//     };

//     this.getAge = function () {
//         return this.arr.map(item => item.age);
//     };
// }

// let userName = new GetUserInfo(users);
// let userAge = new GetUserInfo(users);

let userName = users.map(item => item.name);
let userAge = users.map(item => item.age);

console.log(userName);
console.log(userAge);

// 2. На основе первоначального создать новый массив пользователей которым есть 18 лет.

// function checkAge(arr) {
//     return arr.filter(item => item.age >= 18);
// }

// let adultUsers = checkAge(users);

let adultUsers = users.filter(item => item.age >= 18);

console.log(adultUsers);


// 3. Найти пользователя с конкретным именем и возрастом и его индекс в массиве.

// function findUser(arr, name, age) {
//     return arr.find(item => item.name == name && item.age == age) ;
// }

// let user = findUser(users, "Bill", 16);

// function findUserIndex(arr, element) {
//     return arr.findIndex(item => item == element) ;
// }

// let userIndex = findUserIndex(users, user);


let user = users.find(item => item.name == "Bill" && item.age == 16);
let userIndex = users.findIndex(item => item == user);


console.log(user);
console.log(userIndex);





// Также написать свои функции map, filter, которые первым аргументом принимают
//  массив а вторым функцию колбек. По примеру forEach из лекции. 

function filter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (callback(item, i)) {
            newArr.push(item);
        }      
    }
    return newArr;
}

let adult = filter(users, item => item.age > 23);
console.log(adult);

// Описание
// При вызове функции filter() первым аргументом мы передаем массив, в нашем случае это массив пользователей users,
// вторым аргументов передаем функцию колбэк.Первым шагом функция filter() создает новый массив,
// затем проходится циклом по массиву, который мы передали users, и на каждой итерации цикла
// мы записываем элемент в переменную item и передаем в качестве первого аргумента в нашей функции колбэк,
// а вторым аргументом передаем индекс первого аргумента. Функцию колбэк используем как условие для if, и если
// функция колбэк вернет TRUE для переданных в неё элементов, то эти элементы запушатся в новый массив newArr,
// и когда цикл закончится, функция filter вернет массив newArr с нужными нам значениями.




function map(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        newArr.push(callback(item, i, arr));     
    }
    return newArr;
}

let usersName = map(users, item => item.name);
console.log(usersName);

// Описание
// При вызове функции map() первым аргументом мы передаем массив, в нашем случае это массив пользователей users,
// вторым аргументов передаем функцию колбэк. Первым шагом функция map() создает новый массив,
// затем проходится циклом по массиву, который мы передали users, и на каждой итерации цикла
// мы записываем элемент в переменную item и передаем в качестве первого аргумента в нашей функции колбэк,
// а вторым аргументом передаем индекс первого аргумента, а третим аргументом будет переданный в функцию массив, у нас users.
// Результат выполнения функции колбэк для переданных в неё элементов будет пушиться в новый массив newArr, и когда цикл
// закончится, функция map вернет массив newArr с нужными нам значениями.