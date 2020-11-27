"use strict";

class Hamburger {
    constructor(...args) {
        this.order = new Set();
        this.order.add(args);

        for (let value of this.order) {
            for (let item of Array.from(value)) {  
                this.order.add(item);
            }   
        }

        this.order.delete(args);

        // this.order.add(size, stuff);
        // this.hamburger = [...args];
    }

    // static SIZE_SMALL = [50, 20]
    // static SIZE_BIG = [100, 40]

    // static STUFFING_CHEESE = [10,20]
    // static STUFFING_SALAD = [20, 5]
    // static STUFFING_FRIES = [15, 10]

    // static TOPPING_SPICE = [15, 0]
    // static TOPPING_MAYO = [20, 5]
    // static TOPPING_KETCHUP = [20, 5]
    // static TOPPING_SAUCE = [15, 5]

    // static SIZE = {
    //     SMALL: [50, 20],
    //     BIG: [100, 40],
    // }

    // static STUFFING = {
    //     CHEESE: [10, 20],
    //     SALAD: [20, 5],
    //     FRIES: [15, 10],
    // }

    // static TOPPING = {
    //     SPICE: [15, 0],
    //     MAYO: [20, 5],
    //     KETCHUP: [20, 5],
    //     SAUCE: [15, 5],
    // }

    static SIZE = {
        SMALL: { price: 50, calories: 20 },
        BIG: { price: 100, calories: 40 },
    }

    static STUFFING = {
        CHEESE: { price: 10, calories: 20 },
        SALAD: { price: 20, calories: 5 },
        FRIES: { price: 15, calories: 10 },
    }

    static TOPPING = {
        SPICE: { price: 15, calories: 0 },
        MAYO: { price: 20, calories: 5 },
        KETCHUP: { price: 20, calories: 5 },
        SAUCE: { price: 15, calories: 5 },
    }



    calculatePrice() {
        let result = Array.from(this.order).reduce((accamulator, currentValue) => accamulator + currentValue.price, 0);
        // console.log(this.order);
        return `${result} tugricov`;
    }

    calculateCalories() {
        let result = Array.from(this.order).reduce((accamulator, currentValue) => accamulator + currentValue.calories, 0);
        return `${result} calories`;
    }

    addTopping(topping) {
        // this.hamburger.push(topping);
        this.order.add(topping);
    }
};

let hamburger = new Hamburger(Hamburger.SIZE.SMALL, Hamburger.STUFFING.CHEESE);

hamburger.addTopping(Hamburger.TOPPING.MAYO);
console.log("Price: " + hamburger.calculatePrice());
console.log("Calories: " + hamburger.calculateCalories());


hamburger.addTopping(Hamburger.TOPPING.SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());
console.log("Calories with sauce: " + hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING.SPICE);
console.log("Price with spice: " + hamburger.calculatePrice());
console.log("Calories with spice: " + hamburger.calculateCalories());