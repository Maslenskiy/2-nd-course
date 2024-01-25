// Задание 1
// С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
// Колбэк для сортировки
function sortByAge (a, b){
  return  a.age - b.age
}
// Вывел в консоль
console.log(people.sort(sortByAge));
