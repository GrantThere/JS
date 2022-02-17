// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, vMax, v3) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.vMax = vMax;
//     this.v3 = v3;
//     this.dvive = function () {
//         console.log(`їдемо зі швидкістю ${vMax} на годину`);
//     }
//     this.info = function () {
//         document.writeln(`MODEL - ${model}`);
//         document.writeln(`PRODUCER - ${producer}`);
//         document.writeln(`YEAR - ${year}`);
//         document.writeln(`VMAX - ${vMax}`);
//         document.writeln(`V3 - ${v3}`);
//     }
//     this.increseMaxSpeed = function (newSpeed) {
//         if (newSpeed>this.vMax) {this.vMax = newSpeed;}
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (fullName,age,stg) {
//         this.driver = {
//             fullName: fullName,
//             age: age,
//             stg: stg
//         }
//     }
// }
// let tesla = new Car('tsl','mask',2020,300,200);
// console.log(tesla);
// tesla.dvive();
// tesla.info();
// tesla.increseMaxSpeed(400);
// tesla.changeYear(2021);
// tesla.addDriver('Ris Kyle',25,4);
// console.log(tesla);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Caar {
//     constructor(model, producer, year, vMax, v3) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.vMax = vMax;
//         this.v3 = v3;
//         this.driverr = {
//             fullName: '',
//             age: 0,
//             stg: 0
//         };
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.vMax} на годину`);
//     }
//     info () {
//         document.writeln(`MODEL - ${this.model}`);
//         document.writeln(`PRODUCER - ${this.producer}`);
//         document.writeln(`YEAR - ${this.year}`);
//         document.writeln(`VMAX - ${this.vMax}`);
//         document.writeln(`V3 - ${this.v3}`);
//     }
//     increaseMaxSpeed (newSpeed) {
//         if (newSpeed>this.vMax) {this.vMax = newSpeed;}
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driverr.fullName = driver.fullName;
//         this.driverr.age = driver.age;
//         this.driverr.stg = driver.stg;
//     }
// }
// let lada = new Caar('lada','as',1895,20,5);
// console.log(lada);
// lada.drive();
// lada.info();
// lada.increaseMaxSpeed(25);
// lada.changeYear(1785);
// let driver1 = {
//   fullName: 'Ada Sont',
//   age: 100,
//   stg: 70
// };
// lada.addDriver(driver1);
// console.log(lada);

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, sizeFoot) {
//         this.name = name;
//         this.age = age;
//         this.sizeFoot = sizeFoot;
//     }
// }
// class Prince {
//     constructor(name, age, sizefind) {
//         this.name = name;
//         this.age = age;
//         this.sizefind = sizefind;
//     }
// }
// let sindName = ['as','ad','af','ag','ah','aj','ak','az','ax','av'];
// let prinName = ['er','ed','eq','ew','ey','eh','eb','en','ep','eo'];
// let sindAge = [21,34,23,63,32,63,32,23,32,54];
// let prinAge = [52,54,21,35,34,32,65,42,52,52];
// let sindFoot = [2,5,2,1,2,1,3,5,4,1];
// let prinFoot = [5,2,3,1,2,4,3,1,1,2];
// let sind = [];
// let trueSind = [];
// let prin = new Prince(prinName[0],prinAge[0],prinFoot[0]);
// for (let i = 0; i<10;i++) {
//     sind.push(new Cinderella(sindName[i],sindAge[i],sindFoot[i]));
//     if (sind[i].sizeFoot === prin.sizefind) {trueSind.push(sind[i]);}
// }
// console.log(sind);
// console.log(prin);
// console.log(trueSind);
// let findSind = 'ah';
// function findSinderellaFor(sinda) {
//     for (let i = 0; i<10;i++) {
//         if (sind[i].name===sinda||sind[i].age===sinda||sind[i].sizeFoot===sinda) {return sind[i]; }
//     }
// }
// function findSinderellaFiltr(sinda) {
//     return sind.filter(item => (item.name===findSind||item.age===findSind||item.sizeFoot===findSind));
// }
// console.log(findSinderellaFiltr(findSind));
