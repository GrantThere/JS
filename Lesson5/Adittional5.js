// - Дано натуральное число n. Выведите все числа от 1 до n.
// function natureNums(n) {
//     let natNumsAra = [];
//     for (let i = 1; i<n+1; i++) {
//         natNumsAra.push(i);
//     }
//     return natNumsAra;
// }
// console.log(natureNums(50));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// function sortAB(a,b) {
//     if (a<b) {
//         for (let i = a; i<=b; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = a; i>=b; i--) {
//             console.log(i);
//         }
//     }
// }
// sortAB(102,50);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// function revItem(ara, i) {
//     let conv;
//     conv = ara[i];
//     ara[i] = ara[i+1];
//     ara[i+1] = conv;
//     return ara;
// }
// console.log(revItem([9,8,0,4], 1));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let nums = [0,0,1,1,0];
// function nullToTheEnd(aray) {
//     while (aray[0]===0) {
//         for (let i = 0; i<aray.length; i++) {
//             aray[i] = aray[i+1];
//             aray[aray.length-1] = 0;
//         }
//
//     }
//     return aray;
//
// }
// console.log(nullToTheEnd(nums));