// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let praymS = (a,b)=> (a*b);
// console.log(praymS(2,3));

// - створити функцію яка обчислює та повертає площу кола
// let kiloS = (r)=> (Math.PI*Math.pow(r,2));
// console.log(kiloS(2));

// - створити функцію яка обчислює та повертає площу циліндру
// let cylS = (h,r)=> (2*Math.PI*r*h);
// console.log(cylS(2,3));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let arrayGo = (araay)=> {
//     for (let arrfill of araay) {
//         console.log(arrfill);
//     }
// };
// console.log(arrayGo(users));

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let parMaker = (txt) => (document.write(`<p>${txt}</p>`));
// console.log(parMaker("fasfsfafgg fasdf afaf"));

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let similarLi = (txtLi) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${txtLi}</li>`)
//     }
//     document.write(`</ul>`);
// };
// similarLi('asffas sgf');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let similarLi = (txtLi, num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txtLi}</li>`)
//     }
//     document.write(`</ul>`);
// };
// similarLi('sfsvafe sff', 4560);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let randar = [2, true, "sada", false, "asda", "sada", 34, 532];
// let spys = (array) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// spys(randar);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id:1, name: "asda", age: 25},
//     {id:2, name: "ghk", age: 65},
//     {id:3, name: "saf", age: 59},
//     {id:4, name: "n,", age: 32},
// ];
// let arOj = (array) => {
//     for (let i = 0; i<array.length; i++) {
//         document.write(`<div>${array[i].id} - ${array[i].name} - ${array[i].age}</div>`);
// }
// };
// arOj(users);