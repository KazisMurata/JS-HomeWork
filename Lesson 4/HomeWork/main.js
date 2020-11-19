let arr = [
    [16,-37,54,-4,72],
    [-56,47,4,-16,25],
    [-63,4,-54,76,-4],    
    [12,-35,4,47],
    [2]   
];

// 1. Найти сумму и количество положительных элементов.

function sumPositiveElements(arr) {
    let sumPositiveElements = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > 0) {
                sumPositiveElements += arr[i][j];
            }          
        }      
    }
    return sumPositiveElements;
}

function countPositiveElements(arr) {
    let countPositiveElements = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > 0) {
                countPositiveElements++;
            }          
        }      
    }
    return countPositiveElements;
}


console.log(`Cумма - ${sumPositiveElements(arr)} и количество - ${countPositiveElements(arr)} положительных элементов`);



// 2. Найти минимальный элемент массива и его порядковый номер.

function minimalElement(arr) {
    let minimalElement = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] < minimalElement) {
                minimalElement = arr[i][j];
            }          
        }      
    }
    return minimalElement;
}

function indexMinimalElement(arr) {
    let indexMinimalElement = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == minimalElement(arr)) {
                indexMinimalElement = [i, j];
            }          
        }      
    }
    return indexMinimalElement;
}

console.log(`Минимальный элемент массива ${minimalElement(arr)} и его порядковый номер ${indexMinimalElement(arr)}`);


// 3. Найти максимальный элемент массива и его порядковый номер.

function maxElement(arr) {
    let maxElement = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > maxElement) {
                maxElement = arr[i][j];
            }          
        }      
    }
    return maxElement;
}

function indexMaxElement(arr) {
    let indexMaxElement = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == maxElement(arr)) {
                indexMaxElement = [i, j];
            }          
        }      
    }
    return indexMaxElement;
}

console.log(`Максимальный элемент массива ${maxElement(arr)} и его порядковый номер ${indexMaxElement(arr)}`);


// 4. Определить количество отрицательных элементов.

function quantityNegativeElements(arr) {
    let quantityNegativeElements = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] < 0) {
                quantityNegativeElements++;
            }          
        }      
    }
    return quantityNegativeElements;
}

console.log(`Kоличество отрицательных элементов ${quantityNegativeElements(arr)}`);


// 5. Найти количество нечетных положительных элементов.

function quantityOddPositiveElements(arr) {
    let quantityOddPositiveElements = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > 0 && arr[i][j] % 2) {
                quantityOddPositiveElements++;
            }          
        }      
    }
    return quantityOddPositiveElements;
}

console.log(`Kоличество нечетных положительных элементов ${quantityOddPositiveElements(arr)}`);


// 6. Найти количество четных положительных элементов.

function quantityEvenPositiveElements(arr) {
    let quantityEvenPositiveElements = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > 0 && arr[i][j] % 2 == 0) {
                quantityEvenPositiveElements++;
            }          
        }      
    }
    return quantityEvenPositiveElements;
}

console.log(`Kоличество четных положительных элементов ${quantityEvenPositiveElements(arr)}`);


// 7. Найти произведение положительных элементов.

function multiplyPositiveElements(arr) {
    let multiplyPositiveElements = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > 0) {
                multiplyPositiveElements *= arr[i][j];
            }          
        }      
    }
    return multiplyPositiveElements;
}

console.log(`Произведение положительных элементов ${multiplyPositiveElements(arr)}`);