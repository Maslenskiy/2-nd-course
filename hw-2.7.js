
// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.
// Создаем объект Date и сохраняем в переменную currentDate текущую дату

// Создаем объект Date и сохраняем в переменную currentDate текущую дату
// Создаем объект Date и сохраняем в переменную currentDate текущую дату
let currentDate = new Date();

// Добавляем 73 дня к текущей дате
currentDate.setDate(currentDate.getDate() + 73);

// Форматирование даты для вывода в виде строки "ГГГГ-ММ-ДД"
function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return year + '-' + month + '-' + day;
}

// Получаем отформатированную строку с датой через 73 дня
let formattedFutureDate = formatDate(currentDate);

// Вывод результата
console.log("Дата через 73 дня:", formattedFutureDate);



