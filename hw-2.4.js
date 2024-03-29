// // Задание 1-Выведите в консоль 2 раза слово «Привет».

// let i = 0;

// while (i < 2) {
//     console.log('Привет');
//     i++;
// }

// // Задание 2-Выведите в консоль цифры от 1 до 5.
// let i = 1;
// for(i = 1; i <= 5; i++){
//     console.log(i)
// }

// Задание 3 - Выведите в консоль числа от 7 до 22.

// let i = 7;
// for(i = 7; i <= 22; i++){
//     console.log(i);
// }

// Задание 4- Дан объект obj с ключами «Коля», «Вася», «Петя» и с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля — зарплата 200 долларов.'

//  const obj = {
//     'Коля': '200',
//     'Вася': '300',
//     'Петя': '400'
//   }

//   for (const key in obj) {
//         alert(key + ' — зарплата ' + obj[key] + ' долларов.');
//   }

// Задание 5- Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация — это проход цикла), и запишите его в переменную num.

// let n = 1000;
// let num = 0;

// while (n >= 50) {
//   n /= 2;
//   num++;
// }

// console.log("Результат деления: " + n);
// console.log("Количество итераций: " + num);


// Задание 6-В вашей компании пятница является днем отчетным.

// Нам нужно написать программу, которая считает дни месяца по датам, определяет, какой день пятница, и выводит сообщение с напоминанием, что нужно подготовить еженедельный отчет.

// Условия задачи:

// Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7).

// Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида:

// "Сегодня пятница, ...-е число. Необходимо подготовить отчет."

// В нашем месяце 31 день. В результате у вас должно вывестись от 4 до 5 сообщений с напоминаниями по разным датам.


// // Номер первой пятницы месяца (1 - пятница, 2 - суббота, и так далее)
let firstFriday = 1;

// Число дней в месяце
let daysInMonth = 31;

// Переменная для хранения текущего дня месяца
let currentDay = firstFriday;

// Цикл по дням месяца
for (let day = 1; day <= daysInMonth; day++) {
  // Проверка, является ли текущий день пятницей
  if (currentDay === 1) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
  }

  // Увеличение текущего дня (циклический счет от 1 до 7)
  currentDay = (currentDay % 7) + 1;
}
