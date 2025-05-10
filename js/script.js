// Создайте переменную isLoggedIn со значением true. Преобразуйте это 
// логическое значение в строку с помощью toString() и выведите результат в консоль.
const isLoggedIn = true; // boolean
const stringIsLoggedIn = "" + isLoggedIn;
console.log("До преобразования:", isLoggedIn, typeof isLoggedIn);
console.log("После преобразования:", stringIsLoggedIn, typeof stringIsLoggedIn);



// Создайте переменную itemsInCart со значением 5. Преобразуйте её в 
// логическое значение и объясните, почему вышел такой результат.
const itemsInCart = 5;
const hasItemsInCart = Boolean(itemsInCart);
console.log("До преобразования:", itemsInCart, typeof itemsInCart);
console.log("После преобразования:", hasItemsInCart, typeof hasItemsInCart);



// 3. Создайте переменную `message` со значением `"   Welcome to JavaScript World!   "`.
let message = "   Welcome to JavaScript World!   ";
console.log(message);

// - Удалите пробелы в начале и конце строки.
message = message.trim(); // -> "Welcome to JavaScript World!"
console.log(message);

// - Преобразуйте строку в верхний регистр.
message = message.toUpperCase();
console.log(message);

// - Проверьте, содержит ли строка слово `"JavaScript"`.
const hasJavaScriptWord = message.toLowerCase().includes("JavaScript".toLowerCase());
console.log(hasJavaScriptWord);



// 4. Объявите переменную `score` и присвойте ей строковое значение `"100"`.
let score = "100";
console.log(score, typeof score);
// - Преобразуйте `score` в число, добавьте к нему 20 и выведите результат.
score = +score + 20;
console.log(score, typeof score);
// - Затем преобразуйте полученное значение обратно в строку и выведите его тип с помощью `typeof`.
score = "" + score;
console.log(score, typeof score);



// 5. Попробуйте написать свою программу, которая будет давать рекомендации на основе уровня шума:
// - Спросите у пользователя уровень шума в децибелах (дБ).
// - Если уровень шума ниже 30 дБ, выведите сообщение `"Очень тихо. Это отличное место для отдыха."`
// - Если уровень шума от 30 до 50 дБ, выведите `"Спокойно. Подходит для чтения и работы."`
// - Если уровень шума от 50 до 70 дБ, выведите `"Умеренно шумно. Возможны помехи при концентрации на работе."`
// - Если уровень шума выше 70 дБ, выводите `"Очень шумно! Рекомендуется использовать беруши."`

const db = +prompt("Введите уровень шума в децибелах (дБ) в комнате:");

if (db < 30) {
  alert("Очень тихо. Это отличное место для отдыха.");
} else if (db >= 30 && db < 50) {
  alert("Спокойно. Подходит для чтения и работы.");
} else if (db >= 50 && db < 70) {
  alert("Умеренно шумно. Возможны помехи при концентрации на работе.");
} else {
  alert("Очень шумно! Рекомендуется использовать беруши.");
}



// 6. Попробуйте написать программу, которая будет выполнять простые 
// математические операции на основе введённых пользователем значений:
// - Запросите у пользователя первое число. 
// - Запросите у пользователя второе число.
// - Запросите у пользователя математическую операцию: `+`, `-`, `*`, `/`.
// - Проверьте, что оба числа корректны (являются числами). Если хотя бы одно 
//   значение некорректно, выведите сообщение `"Ошибка: введите числовые значения."`.
// - Если все данные корректны, выполните выбранную операцию и выведите результат.

const a = +prompt("Введите первое число:");
const b = +prompt("Введите второе число:");
const operation = prompt("Введите математическую операцию: `+`, `-`, `*`, `/`");

if (isNaN(a) || isNaN(b)) {
  alert("Ошибка: введите числовые значения.")
} else {
  let result;
  if (operation === "+") {
    result = a + b;
  } else if (operation === "-") {
    result = a - b;
  } else if (operation === "*") {
    result = a * b;
  } else if (operation === "/") {
    result = a / b;
  } else {
    alert("Ошибка: некорректная математическая операция.")
  }

  alert(`${a} ${operation} ${b} = ${result.toFixed(2)}`);
}
