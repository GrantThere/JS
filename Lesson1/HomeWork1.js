// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let hlo = 'hello';
let ow = 'owu';
let cm = 'com';
let u = 'ua';
let a = 1;
let b = 10;
let c = -999;
let d = 123;
let Pi = 3.14;
let E = 2.7;
let f = 16;
let bool1 = true;
let bool2 = false;
// Вивести кожну змінну за допомогою:
// console.log
console.log(hlo);
console.log(ow);
console.log(cm);
console.log(u);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(Pi);
console.log(E);
console.log(f);
console.log(bool1);
console.log(bool2);
// alert
// alert(hlo);
// alert(ow);
// alert(cm);
// alert(u);
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(Pi);
// alert(E);
// alert(f);
// alert(bool1);
// alert(bool2);

// document.write
document.write(`<div>${hlo}</div>`);
document.write(`<div>${ow}</div>`);
document.write(`<div>${cm}</div>`);
document.write(`<div>${u}</div>`);
document.write(`<div>${a}</div>`);
document.write(`<div>${b}</div>`);
document.write(`<div>${c}</div>`);
document.write(`<div>${d}</div>`);
document.write(`<div>${Pi}</div>`);
document.write(`<div>${E}</div>`);
document.write(`<div>${f}</div>`);
document.write(`<div>${bool1}</div>`);
document.write(`<div>${bool2}</div>`);
//  Переприсвоїти кожній змінній з завдання значення на довільне.
hlo = 666;
ow = true;
cm = 'commend';
u = 12345654321;
a = false;
b = false;
c = 5*8;
d = '123';
Pi = 'Pipipipip';
E = 5+8;
f = 16;
bool1 = 'true';
bool2 = 'false';
// Вивести кожну змінну за допомогою:
// console.log
console.log(hlo);
console.log(ow);
console.log(cm);
console.log(u);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(Pi);
console.log(E);
console.log(f);
console.log(bool1);
console.log(bool2);
// alert
// alert(hlo);
// // alert(ow);
// // alert(cm);
// // alert(u);
// // alert(a);
// // alert(b);
// // alert(c);
// // alert(d);
// // alert(Pi);
// // alert(E);
// // alert(f);
// // alert(bool1);
// // alert(bool2);
// document.write
document.write(`<div></div>`);
document.write(`<div></div>`);
document.write(`<div></div>`);
document.write(`<div>${hlo}</div>`);
document.write(`<div>${ow}</div>`);
document.write(`<div>${cm}</div>`);
document.write(`<div>${u}</div>`);
document.write(`<div>${a}</div>`);
document.write(`<div>${b}</div>`);
document.write(`<div>${c}</div>`);
document.write(`<div>${d}</div>`);
document.write(`<div>${Pi}</div>`);
document.write(`<div>${E}</div>`);
document.write(`<div>${f}</div>`);
document.write(`<div>${bool1}</div>`);
document.write(`<div>${bool2}</div>`);
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person. (Не об'єкт)
let  firstName = 'Іван';
let middleName = 'Ростиславович';
let lastname = 'Галан';
let person = firstName+" "+middleName+' '+lastname;
console.log(person);
//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
firstName = prompt('Імя');
middleName = prompt('По - батькові');
let age = prompt('Вік');
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
console.log('Вітаю ' + firstName + ' '+ middleName + '.' + ' Тобі '+ age + ' років.')
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1);
console.log(typeof b1);
console.log(typeof c1);
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
let v1 = 5<6;
console.log(v1);
//   5 ? 6 -> false
let v2 = 5>6;
console.log(v2);
//   5 ? 6 -> false
let v3 = 5==6;
console.log(v3);
//   5 ? 6 -> false
let v4 = 5>=6;
console.log(v4);
//   10 ? 10 -> true
let v5 = 10==10;
console.log(v5);
//   10 ? 10 -> true
let v6 = 10===10;
console.log(v6);
//   10 ? 10 -> false
let v7 = 10!=10;
console.log(v7);
//   10 ? 10 -> false
let v8 = 10<10;
console.log(v8);
//   10 ? 10 -> false
let v9 = 10!==10;
console.log(v9);
//   123 ? '123' -> false
let v10 = 123 === '123';
console.log(v10);
//   123 ? '123' -> true
let v11 = 123 == '123';
console.log(v11);
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
// Виодиться - 205, так як при даному записі до string додається число як string, а тег при такому записі не реалізується
//      document.write(str - a + "<br/>");
// Виволиться значення - 15, так як при відніманні від string числа, string перетворюэться у число, а тег при такому записі не реалізується
//      document.write(str * "2" + "<br/>");
// Виводиться значення - 40, бо при множенні string а string вони мнодаться як числа, а тег при такому записі не реалізується
//      document.write(str / 2 + "<br/>");
// Виводиться значення - 10, бо string при діленні на число перетворюєтьсся у число,  а тег при такому записі не реалізується