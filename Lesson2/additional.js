// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//=================================================================
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// let massive = friends.length;
// if (massive<3) {
//     console.log('це маленький масив, в якому менше 3-х елементів.');
// } else {
//     console.log('це великий масив, в якому  3 і більше елементи');
// }
//=================================================================
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//=================================================================
// let num1 = +prompt('Введіть число 1');
// let num2 = +prompt('Введіть число 2');
// let num3 = +prompt('Введіть число 3');
// let numma;
// let nums;
// if (num1>num2) {
//     numma = num1;
//     if (num1<num3) {
//         numma = num3;
//     }
// } else if (num2>num3) {
//     numma = num2;
// } else {
//     numma = num3;
// }
// switch (numma) {
//     case num1:
//         nums = (num2>num3) ? num2: num3;
//         break;
//     case num2:
//         nums = (num1>num3) ? num1: num3;
//         break;
//     case num3:
//         nums = (num2>num1) ? num2: num1;
//         break;
// }
// console.log(nums);
//=================================================================
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//============================Тернанкою============================
// let a = +prompt('Введіть число а');
// let b = +prompt('Введіть число b');
// let resylt;
// resylt = (a+b<4) ? 'Мало':'Багато';
// console.log(resylt);
//=================================================================
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//=================================================================
// let chyslo = +prompt('Введи будь яке число від -100 , 0 , +100');
// let statuss = (chyslo===0) ? 'Число являэться нулем': (chyslo>0) ? 'Число позитивне': 'Число негативне';
// console.log(statuss);
//=================================================================