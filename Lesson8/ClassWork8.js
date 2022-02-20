// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let mainHeader = document.getElementById('main_header');
mainHeader.classList.add('name_group');
// b) робить шириниу елементу ul 400px
let ull = document.getElementsByTagName('ul');
console.log(ull);
ull[0].style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elemLinkLists = document.getElementsByClassName('linkList');
for (const elemLinkList of elemLinkLists) {
    elemLinkList.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
console.log(listElement2[0].innerText);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let elementsLi = document.getElementsByTagName('li');
for (const elementLi of elementsLi) {
    elementLi.style.backgroundColor = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aAs = document.getElementsByTagName('a');
for (const aA of aAs) {
    aA.classList.add('anchor');
    if (aA.innerText === 'link3') {
        aA.style.fontSize = '40px';
    }
    aA.classList.add(`element_${aA.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let elementsSubHeader = document.getElementsByClassName('sub-header');
for (const elementSubHeader of elementsSubHeader) {
    let bgColor = prompt('Колір фону');
    elementSubHeader.style.backgroundColor = `${bgColor}`;
    if (elementSubHeader.innerHTML === 'content 2 segment') {
        let txtColor = prompt('Колір тексту');
        elementSubHeader.style.color = `${txtColor}`;
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let elementsContent = document.getElementsByClassName('content_1');
elementsContent[0].innerHTML = prompt('Введіть довільний текст');
// l) отримати елементи p та змінити їм padding на 20px
let pPs = document.getElementsByTagName('p');
for (const pP of pPs) {
    pP.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let txtS = document.getElementsByClassName(text2);
for (const txt of txtS) {
    txt.innerHTML = new Date();
}