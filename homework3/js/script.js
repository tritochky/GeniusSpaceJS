//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
/* const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];
let result = fruts.map((item) => item.name);
console.log(result); */

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
/* let a = [2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 !== 0) continue;
  console.log(a[i]);
} */

//  -- 3 --
//Замініть цикл "for" на "while"
/* for (let i = 0; i < 5; i++) {
  console.log(`цифра ${i}!`);
} */
/* let i = 0;
while (i < 5) {
  console.log(`цифра ${i}!`);
  i++;
} */

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
/* while (true) {
  let num = Number(prompt("Введіть число більше 100: "));

  if (!num || num === "") break;

  if (num <= 100) continue;
  else {
    console.log("Молодець!");
    break;
  }
} */

//  -- 5 --
// Вирахуйте середній вік
/* const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];
let age = girls.map((item) => item.age);
let meanAge = age.reduce((summ, item) => summ + item) / age.length;
console.log(meanAge); */
