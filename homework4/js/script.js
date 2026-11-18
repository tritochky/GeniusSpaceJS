/* ---1---
Перепишіть функцію, використовуючи '?' або '||' */
/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Батьки дозволили?");
  }
} */
/* function checkAge(age) {
  return age > 18 ? true : confirm("Батьки дозволили?");
}
checkAge(40); */

/* ---2---
  Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
 */
/* const min = function (a, b) {
  return a < b ? console.log(a) : console.log(b);
};
min(7, 4); */

/* ---3---
Перепишіть з використанням стрілкових функцій
Замініть Функціональні Вирази на стрілкові функції у коді нижче: */
/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Ви згодні?",
  function () {
    alert("Ви погодились.");
  },
  function () {
    alert("Ви скасували виконання.");
  },
); */

/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання."),
); */

//--- 4-- -
//Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Інакше кажучи, множить число x саме на себе n разів і повертає результат.
//Створіть сторінку, яка запитує x та n, а потім показує результат pow(x, n).
//P.S. В цій задачі функція повинна підтримувати лише натуральні значення n, тобто цілі числа, починаючи з 1.
/* function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
} else {
  alert(pow(x, n));
} */
