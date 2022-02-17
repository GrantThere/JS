// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// //
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
// let names = ['naf', 'nif', 'nuf', 'nof', 'nef', 'noof', 'neef', 'nyf', 'naz', 'nuz'];
// let surnames = ['raf', 'rif', 'ruf', 'rof', 'ref', 'roof', 'reef', 'ryf', 'raz', 'ruz'];
// let emails = ['naf@gm.com', 'nif@gm.com', 'nuf@gm.com', 'nof@gm.com', 'nef@gm.com', 'noof@gm.com', 'neef@gm.com', 'nyf@gm.com', 'naz@gm.com', 'nuz@gm.com'];
// let phones = [380111111111, 380111111112, 380111111113, 380111111114, 380111111115, 380111111116, 380111111117, 380111111118, 380111111119, 380111111110];
// for (let i = 0; i < 10; i++) {
//     users.push(new User(i + 1, names[i], surnames[i], emails[i], phones[i]));
// }
// console.log(users);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// console.log(users.filter(value => (value.id % 2 === 0)));
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// // Зробив спадаючий порядок, бо самы айдышки й так йдуть по зростанню
// console.log(users.sort((pre, next) => (next.id - pre.id)));
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [];
// let clNames = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH', 'III', 'JJJ'];
// let clSurnames = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj'];
// let clEmails = ['aaa@zzz.com', 'bbb@zzz.com', 'ccc@zzz.com', 'ddd@zzz.com', 'eee@zzz.com', 'fff@zzz.com', 'ggg@zzz.com', 'hhh@zzz.com', 'iii@zzz.com', 'jjj@zzz.com'];
// let clPhones = [380111111111, 380111111112, 380111111113, 380111111114, 380111111115, 380111111116, 380111111117, 380111111118, 380111111119, 380111111110];
// let clOrders = [['qw234e','qwheh6e', 'rtrwey'], ['qwheh6e','qwheh6e','qwheh6e', 'rte3w23y'], ['qertrrwe','qwheh6e','qwheh6e','qwheh6e','qwheh6e', 'rtyet'], ['qegwe', 'rthtrhy'], ['q53t4we','qwheh6e', 'rt6uyry'], ['qj6we','qwheh6e', 'rtye'], ['yreqwe','qwheh6e', 'rwetty'], ['twqwe', 'reuty'], ['qwyee', 'rtrthy'], ['qhrtwe', 'rtdsay']];
// for (let i = 0; i<10;i++) { clients.push(new Client(i+1,clNames[i], clSurnames[i],clEmails[i],clPhones[i],clOrders[i]));}
// console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a,b) => (a.order.length-b.order.length)));