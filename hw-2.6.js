// Задание 1
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.

// После вывода значения 10 в консоль цикл должен прекратить свою работу.


// const myArray = [1, 5, 4, 10, 0, 3];

// for(let i = 0; i < myArray.length; i++){

//     console.log(myArray[i]);

//     if(myArray[i] === 10){
//         break;
//     };
// }

// Задание 2

// Дан массив: 
// [1, 5, 4, 10, 0, 3]

// Найдите позицию (индекс) числа 4 в этом массиве.

// Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.

// const arr = [1, 5, 4, 10, 0, 3];

// let index = arr.indexOf(4);

// console.log(`Индекс числа 4 в массиве: ${index}`);

// Задание 3


// Дан массив чисел:  [1, 3, 5, 10, 20]

// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

// const arr = [1, 3, 5, 10, 20];

// let result = arr.join(' ');
// console.log(result);

// Задание 4

// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

// let rows = 3;
// let cols = 3;
// let multiArray = [];

// for(let i = 0; i < rows; i++){

//     let innerArray = [];

//     for(let j = 0; j < cols; j++){

//         innerArray.push(1);
//     }
//   multiArray.push(innerArray);
// }

// console.log(multiArray);

// Задание 5


// Дан массив: [1, 1, 1] Добавьте в конец массива значения 2, 2, 2.

// const arr = [1, 1, 1];

//  arr.push(2, 2, 2);

// console.log(arr);

// Задание 6

// Дан массив: 
// [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.

// let arr = [9, 8, 7, 'a', 6, 5];

// arr.sort((a, b) =>{
//     if(a === 'a') return 1;

//     if(b === 'a') return -1;

//     return a - b;
// })

// let resultAraray = arr.filter(item => typeof item === 'number');

// console.log(resultAraray);

// Задание 7 

// Дан массив: 
// [9, 8, 7, 6, 5].
// Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал».

// const myArray = [9, 8, 7, 6, 5];

// let users = prompt('Угадай число');

// let userNumber = parseInt(users);

// if (!isNaN(userNumber) && myArray.includes(userNumber)) {
//     alert("Угадал!");
// } else {
//     alert("Не угадал.");
// }

// Задание 8

// Дана строка: 'abcdef'.
// // Необходимо, чтобы программа вывела в консоль 'fedcba'

// let str = 'abcsef';

// let result = str.split('').reverse().join('');

// console.log(result);

// Задание 9
// Дан массив: 
// [[1, 2, 3,],[4, 5, 6]].

// Выведите в консоль массив вида: 
// [1, 2, 3, 4, 5, 6].
const arr = [[1, 2, 3], [4, 5, 6]];

let flattenedArr = arr.reduce(function (accumulator, currentArray) {
    return accumulator.concat(currentArray);
}, []);

console.log(flattenedArr);