// / Задача 1

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
// console.log(min(8,4));

// Задача 2

// function checkEvenOdd(number) {
//   if (number % 2 === 0) {
//       return 'Число четное';
//   } else {
//       return 'Число нечетное';
//   }
// }

// // Пример использования функции
// let num = prompt('Введите число: ');
// let result = checkEvenOdd(parseInt(num));
// console.log(result);

// Задача 3.1

// function printSquare(number) {
//     let square = number * number;
//     console.log('Квадрат числа ' + number + ' равен ' + square);
//   }
  
//   // Пример использования функции
//   let num = prompt('Введите число: ');
//   printSquare(parseInt(num));


// Задача 3.2

// function calculateSquare(number) {
//     return number * number;
//   }
  
//   // Пример использования функции
//   let num1 = prompt('Введите число: ');
//   let square = calculateSquare(parseInt(num1));
//   console.log('Квадрат числа ' + num1 + ' равен ' + square);

// Задача 4


// function greetUser() {
//     let age = prompt('Сколько вам лет?');
  
//     if (isNaN(age) || age < 0) {
//         console.log('Вы ввели неправильное значение');
//     } else if (age >= 0 && age <= 12) {
//         console.log('Привет, друг!');
//     } else {
//         console.log('Добро пожаловать!');
//     }
//   }
  
//   // Вызов функции
//   greetUser();

// Задача 5

function multiplyNumbers(num1, num2) {
    // Проверка, являются ли оба параметра числами
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }
  
    // Если оба параметра - числа, возвращаем их произведение
    return num1 * num2;
  }
  
  // Пример использования функции
  let result = multiplyNumbers(5, 7);
  console.log(result);  // Выведет 35
  
  result = multiplyNumbers('abc', 7);
  console.log(result);  // Выведет 'Одно или оба значения не являются числом'