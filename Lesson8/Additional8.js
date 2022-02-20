//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let elements = document.body; // Через цю змінну ініціюю саме всі елементи в body
let araTag = []; // Просто порожній масив який приямає в себе значення
let araClass = [];
function getElemAll (father, araT,araC) { // Функція
    let elements = father.children; //Отримуємо всі
    if (elements.length===0) {
        return {araT,araC};
    } else {
        for (const element of elements) {
            araT.push(element); // Список едементыв бо не так умову прочитав_
            araC.push(element.classList); // Тут вже список класів
            getElemAll(element,araT, araC); // Рекурсія)))
        }
        return {araT,araC};
    }
}
console.log(getElemAll(elements,araTag,araClass));
