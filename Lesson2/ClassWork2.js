// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//=================================================================
// let firstNum = +prompt('Введіть число');
// let secondNum = +prompt('Введіть ще одне число');
// let maxNum;
// if (firstNum>secondNum) {
//     maxNum = firstNum;
// } else if (firstNum===secondNum) {
//     maxNum = 'Числа рівні';
// } else {
//     maxNum = secondNum;
// }
// console.log(maxNum);
//=================================================================
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//=================================================================
// let home = +prompt('ВВеди номер квартири');
// if (home>0&&home<21) {
//     console.log('Пфдїзд №1');
// } else if (home>20&&home<49) {
//     console.log('Пфдїзд №2');
// } else if (home>48&&home<91) {
//     console.log('Пфдїзд №3');
// } else {
//     console.log('Таких квартир тут немає');
// }
//=================================================================
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//=================================================================
// let number = +prompt('Задайте число');
// if (number===10) {
//     console.log('ВІРНО')
// } else {
//     console.log('НЕВІРНО')
// }
//=================================================================
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//=================================================================
// let x = '50';
// let typ = typeof x;
// console.log(typ);
// if (typ==='number') {
//     console.log(1);
// } else if (typ==='string') {
//     console.log(2);
// } else if (typ==='object') {
//     console.log(3);
// } else if (typ==='boolean') {
//     console.log(4);
// } else {
//     console.log('Пиши нормально!!!!');
// }
//=================================================================
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//=================================================================
// let temperature = +prompt('чи ми йдемо сьогодні в OKTEN на навчання?');
// if (temperature>9&&temperature<23) {
//     console.log('');
// } else {
//     console.log('сидимо вдома і вчимося ОНЛАЙН');
// }
//=================================================================
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//=================================================================
// let answer = +prompt(' введіть число від 1 до 5');
// switch (answer) {
//     case 5:
//         console.log('Ти виграв автоомбіль');
//         break;
//     case 1:
//         console.log('Ти виграв дівчину');
//         break;
//     case 2:
//         console.log('Ти виграв телефон');
//         break;
//     case 3:
//         console.log('Ти виграв кіндер - сюрприз');
//         break;
//     case 4:
//         console.log('Ти виграв мівіну');
//         break;
//     default :
//         console.log('Ти вмієш читати? Від 1 до 5!!!!!!')
// }
//=================================================================