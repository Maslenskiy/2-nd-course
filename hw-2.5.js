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

function checkEvenOdd(number) {
  if (number % 2 === 0) {
      return 'Число четное';
  } else {
      return 'Число нечетное';
  }
}

// Пример использования функции
let num = prompt('Введите число: ');
let result = checkEvenOdd(parseInt(num));
console.log(result);