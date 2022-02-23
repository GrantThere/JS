// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div1 = document.createElement('div');
div1.classList.add('wrap', 'collapse', 'alpha', 'beta');
div1.style.backgroundColor = 'silver';
div1.style.color = 'cyan';
div1.style.fontSize = '28px';
document.body.append(div1);
let div1C = div1.cloneNode(true);
document.body.append(div1C);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let araRandStr = ['Main','Products','About us','Contacts'];
let menu = document.body.getElementsByClassName('menu')[0];
let ly = [];
for (let i = 0; i<4; i++ ) {
    let lyyy = document.createElement('li')
    ly.push(lyyy);
    lyyy.innerHTML = araRandStr[i];
    menu.append(ly[i]);

}



// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let i = 0; i<coursesAndDurationArray.length; i++) {
    let divv = document.createElement('div');
    divv.innerText = `${coursesAndDurationArray[i].title} - ${coursesAndDurationArray[i].monthDuration}`;
    document.body.append(divv);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let i = 0; i<coursesAndDurationArray.length; i++) {
   let divItem = document.createElement('div');
   divItem.classList.add('item');
   document.body.append(divItem);
   let h1 = document.createElement('h1');
   h1.classList.add('heading');
   h1.innerText = coursesAndDurationArray[i].title;
   divItem.append(h1);
   let p = document.createElement('p');
   p.classList.add('description')
   p.innerText = coursesAndDurationArray[i].monthDuration;
   divItem.append(p);
}
