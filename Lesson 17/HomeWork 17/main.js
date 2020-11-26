"use strict";

class Hamburger {
    constructor(...args) {
        this.hamburger = [...args];
    }

    static SIZE_SMALL = [50, 20]
    static SIZE_BIG = [100, 40]

    static STUFFING_CHEESE = [10,20]
    static STUFFING_SALAD = [20, 5]
    static STUFFING_FRIES = [15, 10]

    static TOPPING_SPICE = [15, 0]
    static TOPPING_MAYO = [20, 5]
    static TOPPING_KETCHUP = [20, 5]
    static TOPPING_SAUCE = [15, 5]

    calculatePrice() {
        let result = this.hamburger.reduce((accamulator, currentValue) => accamulator + currentValue[0], 0);
        return `${result} tugricov`;
    }

    calculateCalories() {
        let result = this.hamburger.reduce((accamulator, currentValue) => accamulator + currentValue[1], 0);
        return `${result} calories`;
    }

    addTopping(topping) {
        this.hamburger.push(topping);
    }
};

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Price: " + hamburger.calculatePrice());
console.log("Calories: " + hamburger.calculateCalories());


hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());
console.log("Calories with sauce: " + hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Price with spice: " + hamburger.calculatePrice());
console.log("Calories with spice: " + hamburger.calculateCalories());

