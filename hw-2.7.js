// Задание 1
// Преобразуйте строку js в верхний регистр JS.

// let str = 'привет мир';
// let result = str.toUpperCase();
// console.log(result);

// Задание 2
// Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

// function searchStart(arr, searchString) {
//     // Приведем строку поиска и все элементы массива к нижнему регистру
//     searchString = searchString.toLowerCase();
//     arr = arr.map(item => item.toLowerCase());

//     // Используем метод filter для отбора элементов, начинающихся с переданной строки
//     const result = arr.filter(item => item.startsWith(searchString));

//     return result;
// }

// // Примеры вызова функции
// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []


// Задание 3

// Округлите число 32.58884:

// До меньшего целого

// let num = 32.58884;
// console.log(Math.floor(num));

// // До большего целого
// console.log(Math.ceil(num));

// // До ближайшего целого
// console.log(Math.round(num));

// Задание 4

// // Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

// const numArr = [52, 53, 49, 77, 21, 32];

// /* Наименьшее значение */ const minimum = Math.min(...numArr);
// /* Наибольшее значение*/ const maximum = Math.max(...numArr);
// console.log(minimum); 
// console.log(maximum);

// Задание 5 

// // Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.
// function printRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNumber);
// }

// printRandomNumber();



// Задание 6

// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.
// function getRandomArrNumbers(maxNumber) {
//     const arrayLength = Math.floor(maxNumber / 2);
//     const randomNumbers = [];

//     for (let i = 0; i < arrayLength; i++) {
//         const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
//         randomNumbers.push(randomNumber);
//     }

//     return randomNumbers;
// }


// printRandomNumber();	// Примеры вызова функции
// console.log(getRandomArrNumbers(7)); // Например: [6, 2, 7]
// console.log(getRandomArrNumbers(12)); // Например: [9, 11, 10, 9, 3, 0]

// Задание 7

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   // Пример использования:
//   let result = getRandomInt(1, 10);
//   console.log(result);


// Задание 8 
// // Выведите в консоль текущую дату в стандартном режиме

// let currentDate = new Date();
// console.log(currentDate);

// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.
// Создаем объект Date и сохраняем в переменную currentDate текущую дату

let currentDate = new Date();	
console.log(currentDate);	
// Получаем текущий день и прибавляем 73 дня
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

// Выводим результат в консоль
console.log("Текущая дата:", currentDate.toDateString());
console.log("Дата через 73 дня:", futureDate.toDateString());
