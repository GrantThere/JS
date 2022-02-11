// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let num = [32,5,46];
// let numMin = (arr)=>{
//     let min = arr[0];
//     for (i=0; i<3; i++) {
//         if (min>arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// };
// console.log(numMin(num));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let num = [-90,5,46];
// let numMax = (arr)=> {
//     let max = arr[0];
//     for (i=0; i<3; i++) {
//         if (max<arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// };
// console.log(numMax(num));

// - створити функцію яка повертає найбільше число з масиву
// let num = [32,5,46];
// let numMax = (arr)=> {
//     let max = arr[0];
//     for (i=0; i<arr.length; i++) {
//         if (max<arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// };
// console.log(numMax(num));

// - створити функцію яка повертає найменьше число з масиву
// let num = [32,5,46];
// let numMin = (arr)=> {
//     let min = arr[0];
//     for (i=0; i<arr.length; i++) {
//         if (min>arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// };
// console.log(numMin(num));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let num = [32,5,46, -10];
// let summ = (ara)=> {
//     let summary = 0;
//     for (let i = 0; i<ara.length; i++) {
//         summary=summary+ ara[i];
//     }
//     return summary;
// };
// console.log(summ(num));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let num = [32,5,46, -10];
// let summA = (ara)=> {
//     let summary = 0;
//     for (let i = 0; i<ara.length; i++) {
//         summary=summary+ ara[i];
//     }
//     return summary/ara.length;
// };
// console.log(summA(num));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let num = [32,5,46, -10];
// let mainMax = (ara)=> {
//     let aMin = ara[0];
//     let aMax = ara[0];
//     for (let i = 1; i<ara.length; i++) {
//         if (aMin>ara[i]) {
//             aMin = ara[i];
//         }
//         if (aMax<ara[i]) {
//             aMax = ara[i];
//         }
//     }
//     return  [aMax, aMin];
// };
// console.log(mainMax(num));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randNum =  (iter)=> {
//     let iterara = [];
//     for (let i = 0; i<iter; i++ ) {
//         iterara.push(Math.floor(Math.random()*100));
//     }
//     return iterara;
// };
// console.log(randNum(5));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randNum = (iter, limit)=> {
//     let iterara = [];
//     for (let i = 0; i<iter; i++ ) {
//         iterara.push(Math.floor(Math.random()*limit));
//     }
//     return iterara;
// };
// console.log(randNum(5, 50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let num = [32,-5,46, -10];
// let inv = (ara)=> {
//     let emptyAra = [];
//     let j = -1;
//     for (let i = ara.length - 1; i>=0; i--) {
//         j = j+1;
//         emptyAra[j] = ara[i];
//     }
//     return emptyAra;
// };
// console.log(inv(num));