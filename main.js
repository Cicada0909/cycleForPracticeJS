//1
// let str = prompt("Напишите слово");

// let glas = "ауоиэыяюеё";
// let counter = 0;

// for (i = 0; i < str.length; i++) {
//     if (glas.includes(str[i])) {
//             counter++
//         }
// }

// console.log(counter);
//1вариант


//2вариант

let counter = 0;

let str = prompt("Напишите слово");

for (i = 0; i < str.length; i++) {
    
    if (str[i].toLowerCase() == "а" || str[i].toLowerCase() == "у" || str[i].toLowerCase() == "о" ||
        str[i].toLowerCase() == "и" || str[i].toLowerCase() == "э" || str[i].toLowerCase() == "ы" ||
        str[i].toLowerCase() == "я" || str[i].toLowerCase() == "ю" || str[i].toLowerCase() == "е" ||
        str[i].toLowerCase() == "ё") {
        counter++
    }
}

console.log(counter);

//2

let str1 = prompt("Введите слово");
let str3 = prompt("Введите букву");
let counter2 = 0;

for (i = 0; i < str1.length; i++) {
    if (str1[i] == str3) {
        counter2++
    }
}

console.log(counter2);

//3

let str2 = prompt("Введите слово");

for (let i = str2.length - 1; 0 <= i; i--) {
    console.log(str2[i]);
}



