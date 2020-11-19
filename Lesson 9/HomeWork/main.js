"use strict";


// написать функцию generateList(array)

// принимает массив из чисел и массивов чисел, 
// например [1,2, [1.1,1.2,1.3] ,3]

// нужно сгенерировать список из элементов,
//  а если в массиве встречается массив то делать вложенный список


let arr = [1,2,3];
let arr1 =  [1,2, [1.1,1.2,1.3], 3];
let arr2 = [1, 2, 3, 4, 5, 6,[7, 8, 9, 10], 11, 12, 13, 14, [15, 16, 17, 18,[19, 20, 21, 22,[23, 24]]], 25, 26, 27];



function generateList(array) {

    let ul = document.createElement('ul');
    let body = document.querySelector('body');

    let result = array.reduce(function (accumulator, currentValue) {
        
        let li = document.createElement('li');
        accumulator.appendChild(li);
        
        if (Array.isArray(currentValue)) {
            li.appendChild(generateList(currentValue));  
        } else {                
            li.innerHTML = currentValue;                    
        }

        return accumulator;

    }, ul);

    body.append(result);
    return result;
};

generateList(arr2);

