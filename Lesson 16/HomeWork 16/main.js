"use strict";

// Задача
// создать 3 объкта (objA, objB, objC) Придумать как минимум 1 свойство и 1 метод каждому объекту.
// Прототипом objC дожен быть objB, а прототипом objB должен быть objA.

let objA = {
    description: "User Info Storage",
    name: "Jhon",
    surname: "Smith",
    sex: "male",
    age: 25,

    userAge: function() {
        return `${this.age}`;
    },
    userFullName: function() {
        return `${this.name} ${this.surname}`;
    },
    userSex: function() {
        return `${this.sex}`;
    },

    showDescription: function() {
        return this.description;
    },

};


// 1 Реализовать цепочку протитопов с помощью Object.create.

// let objB = Object.create(objA);
// let objC = Object.create(objB);


// 2 Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf)

let objB = {};
objB.__proto__ = objA;

let objC = {};
Object.setPrototypeOf(objC, objB);







objB.description = "Status Storage";

objB.status = true;
objB.sleep = "sleep";
objB.walk = "walk";

objB.changeStatus = function() {
    if (this.status) {
        return this.status = false;
    } else {
        return this.status = true;
    }
};

objB.checkStatus = function() {
    return this.status;
};




objC.description = "Function Storage";

objC.userSleep = function() {
    return `${this.name} ${this.surname} ${this.sleep}. ${this.status}`;
};

objC.userWalk = function() {
    return `${this.name} ${this.surname} not ${this.walk}. ${this.status}`;
};



console.log(objA.showDescription());
console.log(objB.showDescription());
console.log(objC.showDescription());
console.log(objC.userSleep());
console.log(objC.checkStatus());
objC.changeStatus();
console.log(objC.checkStatus());
console.log(objC.userWalk());
console.log(objB.userFullName());
console.log(objC.userSex());
console.log(objC.userAge());





// 3 Реализовать цепочку протитопов с помощью функций конструкторов.



function FunA() {
    this.description = "User Info Storage";   
};

FunA.prototype.name = "Jhon";
FunA.prototype.surname = "Smith";
FunA.prototype.sex = "male";
FunA.prototype.age = 25;

FunA.prototype.showDescription = function() {
    return this.description;
};
FunA.prototype.userSex = function() {
    return `${this.sex}`;
};
FunA.prototype.userFullName = function() {
    return `${this.name} ${this.surname}`;
};
FunA.prototype.userAge = function() {
    return `${this.age}`;
};



function FunB() {
    this.description = "Status Storage";     
};

FunB.prototype.status = true;
FunB.prototype.sleep = "sleep";
FunB.prototype.walk = "walk";

FunB.prototype.changeStatus = function() {
    if (this.status) {
        return this.status = false;
    } else {
        return this.status = true;
    }
};
FunB.prototype.checkStatus = function() {
    return this.status;
}; 



function FunC() {
    this.description = "Function Storage"; 
};

FunC.prototype.userSleep = function() {
    return `${this.name} ${this.surname} ${this.sleep}. ${this.status}`;
};
FunC.prototype.userWalk = function() {
    return `${this.name} ${this.surname} not ${this.walk}. ${this.status}`;
};


// FunA.prototype.constructor = FunA;
// FunB.prototype.constructor = FunB;
// FunC.prototype.constructor = FunC;

FunB.prototype.__proto__ = FunA.prototype;
FunC.prototype.__proto__ = FunB.prototype;


let FuncA = new FunA();
let FuncB = new FunB();
let FuncC = new FunC();


console.log(FuncA.showDescription());
console.log(FuncB.showDescription());
console.log(FuncC.showDescription());
console.log(FuncC.userSleep());
console.log(FuncC.checkStatus());
FuncC.changeStatus();
console.log(FuncC.checkStatus());
console.log(FuncC.userWalk());
console.log(FuncB.userFullName());
console.log(FuncC.userSex());
console.log(FuncC.userAge());