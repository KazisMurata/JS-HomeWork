// Создать массив объектов. 
// В каждом объекте должна содержаться информация о человеке: имя, пол, год рождения. Объектов должно быть 5-10. 
// Для каждой операции нужно создать функцию, которая будет производить вычисления и возвращать результат в место вызова.

let users = [
    {name: "Jhon", sex: "male", birth: 1991},
    {name: "Luci", sex: "female", birth: 1994},
    {name: "Andy", sex: "male", birth: 1992},
    {name: "Jill", sex: "female", birth: 1990},
    {name: "Drake", sex: "male", birth: 1993},
    {name: "Dora", sex: "female", birth: 1995},
];


// 1. Посчитать средний возраст. Округлить до целого числа. 

function countMidAge(arr) {
    let count = 0;
    let midAge = 0;
    let currentYear = (new Date()).getFullYear();
    for (let i = 0; i < arr.length; i++) {
        midAge += currentYear - arr[i].birth;
        count++;         
    }
    return Math.round(midAge / count);
}

console.log(`Cредний возраст ${countMidAge(users)}`);



// 2. Определить представителей какого пола больше 

function checkQuantitySex(arr) {
    let man = 0;
    let woman = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex == "male") {
            man++
        } else if (arr[i].sex == "female") {
            woman++;
        }       
    }

    if (man > woman) {
        return "Мужчин больше";
    } else if (man < woman) {
        return "Женщин больше";
    } else {
        return "Мужчин и Женщин поровну";
    }
}

console.log(checkQuantitySex(users));



// 3. На основе массива скопировать массив пользователей в другой массив сотрудников и добавить им поле зарплата salary.


// Варинат 1

function newArrEmployees(arr) { 
    let newArr = []; 
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = {};
        for (let key in arr[i]) {
            newArr[i][key] = arr[i][key];
        }   
        newArr[i]["salary"] = Math.floor(Math.random() * 10000);    
    }
    return newArr;
}

let employees = newArrEmployees(users);

console.log(employees);


// Варинат 2

// let employees = [];

// function newArrEmployees(arr) { 
//     for (let i = 0; i < arr.length; i++) {
//         employees[i] = {};
//         for (let key in arr[i]) {
//             employees[i][key] = arr[i][key];
//         }   
//         employees[i]["salary"] = Math.floor(Math.random() * 10000);    
//     }
//     return employees;
// }

// console.log(newArrEmployees(users));

// Варинат 3

// function newArrEmployees(arr) { 
//     let employees = [];
//     for (let i = 0; i < arr.length; i++) {
//         employees[i] = {};
//         for (let key in arr[i]) {
//             employees[i][key] = arr[i][key];
//         }   
//         employees[i]["salary"] = Math.floor(Math.random() * 10000);    
//     }
//     return employees;
// }

// console.log(newArrEmployees(users));

// Какой вариант лучше?