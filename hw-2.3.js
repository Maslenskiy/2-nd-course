// Задание 1

// Задаем произвольный текст-пароль
let correctPassword = 'пароль';

// Запрашиваем у пользователя ввод пароля
let userPassword = prompt('Введите пароль:');

// Проверяем введенный пароль
if (userPassword === correctPassword) {
  alert('Пароль введен верно.');
} else {
  alert('Пароль введен неправильно.');
}
