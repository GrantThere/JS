// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//   let agh =[];
//   let a =  str.length%n;
//     for (let i = 0; i<a+1; i++) {
//         agh.push(str.substr(n*i,n));
//     }
//   if (a!==0) {
//       agh.push(str.substr(n*Math.floor(str.length/n),str.length-1));
//       }
//   return agh;
// };
// document.writeln(cutString('наслаждение',3));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// function validator(mail) {
//     let mailUp = mail.toUpperCase();
//     if (!mailUp.includes('@')) {
//         document.writeln(`<h1>Aдрес електронної пошти введений невірно. Будь ласка введіть адресу із символом @.</h1>`);
//     }
//     if (mailUp.indexOf('.')<mailUp.indexOf('@')+2) {
//         document.writeln(`<h1>Aдрес електронної пошти введений невірно. Будь ласка введіть домен вашої пошти правильно.</h1>`);
//     }
//     document.writeln(`Ваша електрона адреса: ${mailUp}`);
// }
// validator('someem ail@gmail.com');

// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// console.log(coursesArray.sort((a,b) => a.modules.length-b.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let count = (str, stringsearch) => {
//     let strMas = str.split('');
//     let count = 0;
//     for (let i = 0; i<strMas.length;  i++) {
//         if (strMas[i]===stringsearch) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(count('sadff fsaa saaaesae', 'a'));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let cutString = (str, n) => {
//     let strAra = str.split(' ');
//     let empryAra = [];
//     for (let i = 0; i<n; i++) {
//         empryAra.push(strAra[i]);
//     }
//     return empryAra;
// }
// console.log(cutString('ada af a afar asfare aefa  s a reasar ', 3));

//6