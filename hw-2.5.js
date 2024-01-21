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

// function multiplyNumbers(num1, num2) {
//     // Проверка, являются ли оба параметра числами
//     if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
//         return 'Одно или оба значения не являются числом';
//     }
  
//     // Если оба параметра - числа, возвращаем их произведение
//     return num1 * num2;
//   }
  
//   // Пример использования функции
//   let result = multiplyNumbers(5, 7);
//   console.log(result);  // Выведет 35
  
//   result = multiplyNumbers('abc', 7);
//   console.log(result);  // Выведет 'Одно или оба значения не являются числом'

// Задача 6

// function cubeAndReturnString() {
//     let userInput = prompt('Введите число:');
  
//     // Проверка, является ли введенное значение числом
//     if (isNaN(userInput)) {
//         return 'Переданный параметр не является числом';
//     }
  
//     let number = parseFloat(userInput);
//     let result = Math.pow(number, 3);
  
//     return number + ' в кубе равняется ' + result;
//   }
  
//   // Проверка для чисел от 0 до 10
//   for (let i = 0; i <= 10; i++) {
//     let output = cubeAndReturnString(i);
//     console.log(output);
//   }

// Задание 7

// Функция для создания объекта круга
// function createCircle(radius) {
//     return {
//         radius: radius,
//         getArea: function() {
//             return Math.PI * Math.pow(this.radius, 2);
//         },
//         getPerimeter: function() {
//             return 2 * Math.PI * this.radius;
//         }
//     };
//   }
  
//   // Создание объектов circle1 и circle2
//   let circle1 = createCircle(5);
//   let circle2 = createCircle(8);
  
//   // Пример использования методов
//   console.log('Площадь circle1:', circle1.getArea());
//   console.log('Периметр circle1:', circle1.getPerimeter());
  
//   console.log('Площадь circle2:', circle2.getArea());
//   console.log('Периметр circle2:', circle2.getPerimeter());

// Задание 8
function getSeason(month) {
    if (isNaN(month) || month < 1 || month > 12) {
        return 'Неправильный номер месяца';
    }
  
    switch (true) {
        case month >= 3 && month <= 5:
            return 'Весна';
        case month >= 6 && month <= 8:
            return 'Лето';
        case month >= 9 && month <= 11:
            return 'Осень';
        default:
            return 'Зима';
    }
  }
  
  function play() {
    let month = parseInt(prompt('Введите номер месяца (от 1 до 12):'));
    let season = getSeason(month);
    console.log(season);
  }