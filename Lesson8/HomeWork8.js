// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let elemContent = document.getElementById('content');
let parTxt = elemContent.textContent;
console.log(parTxt);
// -- отримує текст з блоку з id "rules"
let elemRules = document.getElementById('rules');
let divTxt = elemRules.textContent;
console.log(divTxt);
// -- замініть текст параграфа з id 'content' на будь-який інший
elemContent.textContent = '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
// -- замініть текст параграфа з id 'rules' на будь-який інший
elemRules.textContent = '333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333';
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій

let elemBody = document.body.children;
console.log(elemBody);
for ( const element of elemBody) {
    element.style.backgroundColor = 'red';
    element.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(elemRules.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsFc_Rures = document.getElementsByClassName('fc_rules');
console.log(elementsFc_Rures);
for (const eFc_Rele of elementsFc_Rures) {
    eFc_Rele.style.color = 'red';
}