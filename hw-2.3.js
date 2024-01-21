// Задание 1

// Задаем произвольный текст-пароль
// let correctPassword = 'пароль';

// // Запрашиваем у пользователя ввод пароля
// let userPassword = prompt('Введите пароль:');

// // Проверяем введенный пароль
// if (userPassword === correctPassword) {
//   alert('Пароль введен верно.');
// } else {
//   alert('Пароль введен неправильно.');
// }

// Задание 2
// Создаем переменную и присваиваем ей любое число
// let c;

// // Проверяем условие с использованием логического оператора &&
// c = 0;
// if (c > 0 && c < 10) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// c = 10;
// if (c > 0 && c < 10) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// c = -3;
// if (c > 0 && c < 10) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// c = 2;
// if (c > 0 && c < 10) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// Задание 3

// Создаем две переменные и присваиваем им любые числа
// let d = 50;
// let e = 120;

// // Проверяем условие с использованием логического оператора ||
// if (d > 100 || e > 100) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// Задание 4

// let a = '2';
// let b = '3';

// // Преобразовываем строки в числа и выводим их сумму
// alert(Number(a) + Number(b));

// Задание 5

let monthNumber = 12;

// Проверка на недопустимый номер месяца
if (monthNumber < 1 || monthNumber > 12) {
  console.log('Неверный номер месяца');
} else {
  // Определение сезона с использованием оператора switch
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      console.log('Зима');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Весна');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Лето');
      break;
    case 9:
    case 10:
    case 11:
      console.log('Осень');
      break;
    default:
      console.log('Неверный номер месяца');
  }
}


