
// привести примеры их использования


// 1) площадь круга
// 2) длину окружности

function Circle(r) {
    this.r = r;

    this.calculateSquare = function () {
        return +(3.1415 * (this.r ** 2)).toFixed(2);
    };
        
    this.calculateCircumference = function () {
        return +(2 * 3.1415 * this.r).toFixed(2);
    };
    
}

let circle = new Circle(10);

console.log(`Площадь круга ${circle.calculateSquare()}`);
console.log(`Длина окружности ${circle.calculateCircumference()}`);

circle.r = 20;

console.log(`Площадь круга ${circle.calculateSquare()}`);
console.log(`Длина окружности ${circle.calculateCircumference()}`);


// 3) среднее арифметическое двух чисел
// 4) среднее арифметическое массива (массив чисел)


function ArithmeticalMean(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;

    this.twoNumbers = function () {
        return (this.value1 + this.value2) / 2;
    };
        
    this.arr = function () {
        let arithmeticalMean = 0;
        let count = 0;
        for (let i = 0; i < value1.length; i++) {
            arithmeticalMean += value1[i];
            count++;
        };
        return +(arithmeticalMean / count).toFixed(2);
    };
    
}

let arithmeticalMeanNumbers = new ArithmeticalMean(123, 22);
let arithmeticalMeanArr = new ArithmeticalMean([123, 22, 2, 3, 4, 10]);

console.log(`Cреднее арифметическое двух чисел ${arithmeticalMeanNumbers.twoNumbers()}`);
console.log(`Cреднее арифметическое массива  ${arithmeticalMeanArr.arr()}`);

// Примеры их использования:

// Для решения геометрических задач 
// Возможно для создания инжинерного калькулятора




