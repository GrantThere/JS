// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// function validName(str,sym) {
//     let nStr = str.replaceAll(sym,' ');
//     let masStr = nStr.split(' ');
//     document.write(masStr[0],' ',masStr[2]);
// }
// validName(n1,'.');

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random1Num = (length, num) => {
//     let emptyAra = [];
//     for (let i = 0; i < length; i++) {
//         emptyAra.push(Math.floor(Math.random() * num));
//     }
//     return emptyAra;
// };
// console.log(random1Num(20,20));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let random1Num = (length, num) => {
//     let emptyAra = [];
//     for (let i = 0; i < length; i++) {
//         emptyAra.push(Math.floor(Math.random() * num));
//     }
//     return emptyAra;
// };
// console.log(random1Num(50,50).sort((curent,next) => {
//     return  curent-next;
// }));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let random1NumAndFilterPar = (length, num) => {
//     let emptyAra = [];
//     for (let i = 0; i < length; i++) {
//         emptyAra.push(Math.floor(Math.random() * num));
//     }
//     return emptyAra.filter(ar =>ar%2===0);
// };
// console.log(random1NumAndFilterPar(50,100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let random1NumAndMapStr = (length, num) => {
//     let emptyAra = [];
//     for (let i = 0; i < length; i++) {
//         emptyAra.push(Math.floor(Math.random() * num));
//     }
//     return emptyAra.map(ar =>ar.toString());
// };
// console.log(random1NumAndMapStr(100,100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// let sortNums = (ara, direction) => {
//     if (direction === '+') return ara.sort((curr, next) => next-curr);
//     if (direction === '-') return ar.sort((curr,next) => curr-next);
// };
// console.log(sortNums(nums,'+'));
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(cours => cours.monthDuration>5).sort((curr,next) => next.monthDuration-curr.monthDuration));

//6