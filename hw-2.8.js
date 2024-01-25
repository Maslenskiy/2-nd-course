// Задание 1
// С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];
// // Колбэк для сортировки
// function sortByAge (a, b){
//   return  a.age - b.age
// }
// // Вывел в консоль
// console.log(people.sort(sortByAge));

// Задание 2
// function isPositive(num) {
//     return num > 0;
//   }
  
//   function isMale(person) {
//     return person.gender === 'male';
//   }
  
//   function filter(arr, ruleFunction) {
//     const output = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (ruleFunction(arr[i])) {
//         output.push(arr[i]);
//       }
//     }
  
//     return output;
//   }
  
//   console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
//   const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
//   ];
  
//   console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]
  

// Задание 3

// let secondsPassed = 0;

// const intervalId = setInterval(() => {
//   const currentDate = new Date();
//   console.log(currentDate);
//   secondsPassed += 3;

//   if (secondsPassed >= 30) {
//     clearInterval(intervalId);
//     console.log('30 секунд прошло');
//   }
// }, 3000);

// Задание 4

function delayForSecond(callback) {
    setTimeout(function () {
      callback();
    }, 1000);
  }
  
  delayForSecond(function () {
    console.log('Привет, Глеб!');
  });
  