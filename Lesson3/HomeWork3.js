// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//======================================================================================================================
// let nums = [1, 5, 8, 835, 0];
// let stings = ['aaaa', 'bbbb', 'cccc', 'dddd', 'ffff'];
// let maxer = [568, 'yes', 0, true, false];
// console.log(nums);
// console.log(stings);
// console.log(maxer);
//======================================================================================================================

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//======================================================================================================================
// let empty_ar = [];
// for (let i = 0; i<10; i++) {
//       empty_ar[i] = prompt('Введи щось');
// }
// console.log(empty_ar);
// Або варыант яки йбуде доцільнішим))
// let empty_ar = [];
// empty_ar[0] = true;
// empty_ar[1] = 'asd';
// empty_ar[2] = 0;
// empty_ar[3] = false;
// console.log(empty_ar);
//======================================================================================================================

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let coursesTitleArray = [
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend'
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
// ];
// for (let i = 0; i<coursesTitleArray.length; i++) {
//     document.write(`<div>${coursesTitleArray[i]}</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let coursesTitleArray = [
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend',
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     ];
// for (let i = 0; i<coursesTitleArray.length; i++) {
//     document.write(`<div>${coursesTitleArray[i]} -=- ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let coursesTitleArray = [
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend',
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend',
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex'
//     ];
// let i = 0;
// while (i<coursesTitleArray.length) {
//     document.write(`<h1>${coursesTitleArray[i]}</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let coursesTitleArray = [
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend',
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend',
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex'
//     ];
// let i = 0;
// while (i<coursesTitleArray.length) {
//     document.write(`<h1>${coursesTitleArray[i]} --- ${i}</h1>`);
//     i++;
// }
//======================================================================================================================

//======================================================================================================================
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let nums = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9];
// let i = 0;
// while (i < nums.length) {
//     console.log(nums[i]);
//     i++;
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['sad', 'sdaf', 'gewgtew', '3', '4', 'sad', 'try' ,'htry', 'rtre', '54632'];
// let i = 0;
// while (i < str.length) {
//     console.log(str[i]);
//     i++;
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mics = [true, 1, false, 3, 'asg', 'asdffg', 'asfga' ,false, 8, 9];
// let i = 0;
// while (i < mics.length) {
//     console.log(mics[i]);
//     i++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mics = [true, 'asfsg', false, '3', 'asg', 'asdffg', 'asfga' ,false, true, "false"];
// let i = 0;
// while (i < mics.length) {
//    if (typeof mics[i] === "boolean") {
//        console.log(mics[i],i);
//    }
//     i++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mics = [true, 'asfsg', false, 56, 4564, 'asdffg', 0 ,false, true, "false"];
// let i = 0;
// while (i < mics.length) {
//    if (typeof mics[i] ===  "number") {
//        console.log(mics[i],i);
//    }
//     i++;
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mics = [true, 'asfsg', false, '3', 'asg', 'asdffg', 'asfga' ,false, true, "false"];
// let i = 0;
// while (i < mics.length) {
//    if (typeof mics[i] === "string") {
//        console.log(mics[i],i);
//    }
//     i++;
// }
//======================================================================================================================

//======================================================================================================================
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// epty = [];
// epty[0] = true ;
// epty[1] = 35;
// epty[2] =  463;
// epty[3] =  false;
// epty[4] =  'gsg';
// epty[5] =  false;
// epty[6] =  643;
// epty[7] =  643;
// epty[8] =  'asd';
// epty[9] =  'sdg';
// for (let i = 0; i<epty.length; i++) {
//     console.log(epty[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<10; i++) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i++) {
//     console.log(i);
//     document.write('|||',i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i<101; i = i+2) {
//     console.log(i);
//     document.write('|||',i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i<100; i++) {
//     if (i%2===0) {
//         console.log(i);
//         document.write('|||',i);
//     }
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i<100; i++) {
//     if (i%2!==0) {
//         console.log(i);
//         document.write('|||',i);
//     }
//
// }
//======================================================================================================================

//======================================================================================================================