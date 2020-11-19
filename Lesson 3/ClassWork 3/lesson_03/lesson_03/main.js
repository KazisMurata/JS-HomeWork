// let x = 'value1';

// switch (x) {
//     case 'value3':
//     case 'value1': {
//         console.log('value3 or value1');
//         break;
//     }  // if (x === 'value1')

//     case 'value2': {  // else if (x === 'value2')
//         console.log('value2 here');
//         break;
//     }

//     default: { // else
//         console.log('default');
//         break;
//     }
// }

// let currentDate = new Date();
// let currentDayIndex = currentDate.getDay();

// let currentDayIndex = 6;
// 2, 5 - true

// switch (currentDayIndex % 10) {
//     case 2:
//     case 5: {
//         console.log('У вас сегодня занятие');
//         break;
//     }

//     case 6: {
//         console.log("У вас сегодня английский");
//         break;
//     }

//     default: {
//         console.log('Сегодня можно поработать над дз)');
//     }
// }

// console.log(currentDayIndex);
// let i = 0;
// console.log(i);

// i = i + 1;
// i = i + 1;
// i += 2; // i = i + 2;

// console.log(i);
// let index = null;
// for (let i = 100; i > 0; i -= 10) { // нет необходимости в "начале"
//   console.log( i ); // 0, 1, 2
// }

// console.log(i);

// console.log(21);

// let i = 0;

// for (let i = 0; i < 10; i++) {
//     console.log( i );
// }

// let array = [
//     "string 1",
//     "string 9",
//     "string 2",
//     "string 3",
//     "231321"
// ];

// array.forEach(el => console.log(el));

// to add
// array.unshift("unshift string");

// array.push("string new");

// to remove

// array.shift();
// array.shift();

// array.pop();
// array.pop();

// console.log(array);

// const newArra = new Array();
// let i = 1;
// console.log(array.length);
// console.log(array[i]);

// console.log(array[array.length - 1]);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let j = 1;
// setInterval(function() {
//     document.getElementById("h1").textContent = j;
//     console.log(j++);
// }, 1000);

// const data = [1, 21, 23, 0, 2, 3];
// let indexOfTwo = null;

// for (let i = 0; i < data.length; i++) {
//     console.log('i', i);
//     // debugger;
//     // if (data[i] === 2) {
//     //     
//     //     indexOfTwo = i;
//     // }
// }
// // debugger;
// console.log("index of element 2 = " + indexOfTwo);

// while (condition) {
//     // код
//     // также называемый "телом цикла"
//   }
  
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//     console.log( i );
//     let a = 10;
//     i++;
// }

let userNumber;

while (!userNumber) {
    console.log(userNumber);
    userNumber = Number(prompt('Input number'));
}

console.log('userNumber', userNumber);
