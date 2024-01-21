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

function calculateSquare(number) {
    return number * number;
  }
  
  // Пример использования функции
  let num1 = prompt('Введите число: ');
  let square = calculateSquare(parseInt(num1));
  console.log('Квадрат числа ' + num1 + ' равен ' + square);