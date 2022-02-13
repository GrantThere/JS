// let str1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let strL = [];
// let ind;
// for (let i = 1; i<str1.length; i++) {
//     ind = str1[i].length;
//     strL.push(ind);
// }
// console.log(strL);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let strV = [];
// for (let i = 0; i<str1.length; i++) {
//     strV[i] = str1[i].toUpperCase();
// }
// console.log(strV);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let strS = [];
// for (let i = 0; i<str1.length; i++) {
//     strS[i] = strV[i].toLowerCase();
// }
// console.log(strS);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let nStr = str.trim();
// console.log(nStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// function stringToarray(array) {
//     return array.split(" ");
// }
// let arr = stringToarray(str);
// console.log(arr);
// document.writeln(arr); //


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     return str.substr(0,length);
// }
// document.writeln(delete_characters(str, 7));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     let neStr = str.toUpperCase();
//     return neStr.replaceAll(' ','-');
// }
// document.writeln(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let ara = "asfaf afa fasfFESff "
// function firstUp(strig) {
//     let char = strig.charAt(0);
//     let char1 = char.toUpperCase();
//     return strig.replace(strig.charAt(0),char1);
// }
// document.write(firstUp(ara));

// // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let ar = 'ada fdas af a afsfa e fgws fd f sg gsdgfsdgdsg sdgsfgf'
// function capitalize(str) {
//     let word = str.split(" ");
//     let upW = [];
//     for (let i = 0; i<word.length; i++) {
//         let char = word[i].charAt(0);
//         upW[i] = word[i].replace(word[i].charAt(0),char.toUpperCase());
//     }
//     return upW;
// }
// document.write(capitalize(ar));

//6