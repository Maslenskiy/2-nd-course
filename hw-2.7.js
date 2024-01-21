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

// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

const numArr = [52, 53, 49, 77, 21, 32];

/* Наименьшее значение */ const minimum = Math.min(...numArr);
/* Наибольшее значение*/ const maximum = Math.max(...numArr);
console.log(minimum); 
console.log(maximum);