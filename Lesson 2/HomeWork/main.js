let userAge = prompt ("Сколько вам лет?", '');

if ((userAge % 100) >= 11 && (userAge % 100) <= 14 || (userAge % 10) >= 5 && (userAge % 10) <= 9 || (userAge % 10) == 0) {
    alert (`Вам ${userAge} лет`);
} else if (userAge % 10 == 1) {
    alert (`Вам ${userAge} год`);
} else if ((userAge % 10) >= 2 && (userAge % 10) <= 4) {
    alert (`Вам ${userAge} года`);
} 
