let arrNumbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


// 1. Найти сумму и количество положительных элементов.
let sumPositiveNumbers = null;
let countPositiveNumbers = null;

for (let i = 0; i < arrNumbers.length; i++) {   
    if (arrNumbers[i] > 0) {
        sumPositiveNumbers += arrNumbers[i];
        countPositiveNumbers++;
    }    
}
console.log(`1) Сумма положительных элементов ${sumPositiveNumbers}, Количество положительных элементов ${countPositiveNumbers}`);



// 2. Найти минимальный элемент массива и его порядковый номер.
let minElemArr = null;
let minElemArrIndex = null;

for (let i = 0; i < arrNumbers.length; i++) {      
    if (arrNumbers[i] < minElemArr) {
        minElemArr = arrNumbers[i];
        minElemArrIndex = i;           
    }    
}

console.log(`2) Mинимальный элемент массива ${minElemArr} и его порядковый номер ${minElemArrIndex}`);



// 3. Найти максимальный элемент массива и его порядковый номер.
let maxElemArr = null;
let maxElemArrIndex = null;

for (let i = 0; i < arrNumbers.length; i++) {       
    if (arrNumbers[i] > maxElemArr) {
        maxElemArr = arrNumbers[i];
        maxElemArrIndex = i;           
    }  
}

console.log(`3) Mаксимальный элемент массива ${maxElemArr} и его порядковый номер ${maxElemArrIndex}`);



// 4. Определить количество отрицательных элементов.
let quantNegElem = null;

for (let i = 0; i < arrNumbers.length; i++) {      
    if (arrNumbers[i] < 0) {
        quantNegElem++;
    }
}

console.log(`4) Kоличество отрицательных элементов ${quantNegElem}`);



// 5. Найти количество нечетных положительных элементов.
let quantOddPosElem = null;

for (let i = 0; i < arrNumbers.length; i++) {      
    if (arrNumbers[i] > 0 && arrNumbers[i] % 2) {
        quantOddPosElem++;                       
    }
}

console.log(`5) Kоличество нечетных положительных элементов ${quantOddPosElem}`);



// 6. Найти количество четных положительных элементов.
let quantEvenPosElem = null;

for (let i = 0; i < arrNumbers.length; i++) {      
    if (arrNumbers[i] > 0 && arrNumbers[i] % 2 == 0) {
        quantEvenPosElem++;                       
    }
}

console.log(`6) Kоличество четных положительных элементов ${quantEvenPosElem}`);



// 7. Найти сумму четных положительных элементов.
let sumEvenPosElem = null;

for (let i = 0; i < arrNumbers.length; i++) {      
    if (arrNumbers[i] > 0 && arrNumbers[i] % 2 == 0) {
        sumEvenPosElem += arrNumbers[i];                       
    }
}

console.log(`7) Сумма четных положительных элементов ${sumEvenPosElem}`);



// 8. Найти сумму нечетных положительных элементов.
let sumOddPosElem = null;

for (let i = 0; i < arrNumbers.length; i++) {      
    if (arrNumbers[i] > 0 && arrNumbers[i] % 2) {
        sumOddPosElem += arrNumbers[i];                       
    }
}

console.log(`8) Сумма нечетных положительных элементов ${sumOddPosElem}`);



// 9. Найти произведение положительных элементов.
let multPosElem = 1;

for (let i = 0; i < arrNumbers.length; i++) {      
    if (arrNumbers[i] > 0) {
        multPosElem *= arrNumbers[i];                       
    }
}

console.log(`9) Произведение положительных элементов ${multPosElem}`);



// 10. Найти определить количество элементов, равных 4.
let quantElem = null;

for (let i = 0; i < arrNumbers.length; i++) {      
    if (arrNumbers[i] == 4) {
        quantElem++;                       
    }
}

console.log(`10) Kоличество элементов, равных 4 является ${quantElem}`);



// 11. Найти наибольший среди элементов массива, остальные обнулить.
let arrMaxValue = [];

for (let i = 0; i < arrNumbers.length; i++) {         
    if ( arrNumbers[i] < maxElemArr) { 
        arrMaxValue.push(0);      
    } else if (arrNumbers[i] === maxElemArr) {
        arrMaxValue.push(maxElemArr);
    }  
}

console.log(`11) Найти наибольший среди элементов массива, остальные обнулить`, arrMaxValue);



// 12. Взять еще один массив 
let newArrNumbers = [46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,16,-37,54,-4,72,-56,47,4,-16,25,-37];

console.log(`12) Взят еще один массив `, newArrNumbers);



// 13. Вычислить разность соответствующих элементов массивов и записать в новый массив [-30, -41, 105...].
let newArr = [];

for (let i = 0; i < newArrNumbers.length; i++) {
    newArr.push(arrNumbers[i] - newArrNumbers[i]);    
}

console.log(`13) Разность соответствующих элементов массивов записанa в новый массив`, newArr);