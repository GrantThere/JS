// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let massive = [Math.random(), Math.random(), Math.random(),Math.random(), Math.random(), Math.random(),Math.random(),Math.random() ,Math.random(), Math.random()];
console.log(massive);
let result = massive[0]+massive[1]+massive[2]+massive[3]+massive[4]+massive[5]+massive[6]+massive[7]+massive[8]+massive[9];
console.log(result);
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {
//     name: "Book1",
//     sheets: 1520,
//     genre: "genre1",
//     author: "Autror1"
// };
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let bk = [
    {name: "Book1", sheets: 45, genre: "genre1", author: "Author1"},
    {name: "Book2", sheets: 155, genre: "genre2", author: "Author2"},
    {name: "Book3", sheets: 213, genre: "genre3", author: "Author3"},
    {name: "Book4", sheets: 12155, genre: "genre4", author: "Author4"},
    {name: "Book5", sheets: 23, genre: "genre5", author: "Author5"}
];
console.log(bk[0]);
console.log(bk[1]);
console.log(bk[2]);
console.log(bk[3]);
console.log(bk[4]);
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let spram = height*width;
console.log(spram);
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.floor(heightC*3.14*Math.pow((dC/2),2));
console.log(v);
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
console.log(k);


