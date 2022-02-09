// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function conK(...args) {
//     let res = 0;
//     if (args.length>1) {
//         for (let i = 0; i<args.length; i++) {
//             res = res + args[i];
//         }
//         }
//     else {
//         res = args[0];
//     }
//     return res;
// }
// console.log(conK(1,2,3));

//======================================================================================================================
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let num1 = [1,456,2,-5,6,25,-5];
// let num2 = [-50,-98,568,9,7,-9,7];
// function addf(ara1, ara2) {
//     let resAra = [];
//     for (let i = 0; i<ara1.length; i++) {
//         resAra[i] = ara1[i]+ara2[i];
//     }
//     return resAra;
// }
// console.log(addf(num1,num2));

//======================================================================================================================
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let user = {
//     id: 1,
//     name: 'vasya',
//     surname: 'pupkin',
//     email: 'asd@asd.com',
//     age: 31,
//     gender: 'MALE',
//     skills: [{title: 'java', exp: 10}, {title: 'js', exp: 10}, {title: 'c++', exp: 10}],
//     car: {model: 'toyota', year: 2021, power: 250}
// };
// function kis(ara) {
//     let emptyAra = [];
//     let i =-1;
//     for (const araKeys in ara) {
//         i++;
//         emptyAra[i] = araKeys;
//     }
//     return emptyAra;
// }
// console.log(kis(user));


//======================================================================================================================
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let user = {
    id: 1,
    name: 'vasya',
    surname: 'pupkin',
    email: 'asd@asd.com',
    age: 31,
    gender: 'MALE',
    skills: [{title: 'java', exp: 10}, {title: 'js', exp: 10}, {title: 'c++', exp: 10}],
    car: {model: 'toyota', year: 2021, power: 250}
};
function f(ara) {
    let emptyAra = [];
    let i =-1;
    for (let araKeys of ara) {
        i++;
        emptyAra[i] = araKeys;
    }
    return emptyAra;
}
console.log(f(user));
