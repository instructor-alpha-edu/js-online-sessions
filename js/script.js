// 1. Создайте объект `book`, который содержит свойства `title` и `author`. Затем:
const book = {
  title: "Абай жолы",
  author: "Мухтар Ауезов"
};
console.log(book);

// - Добавьте новое свойство `year`.
book["year"] = 1942;
console.log(book);

// - Измените значение свойства `title`.
book.title = "Абай жолы. Часть 1";
console.log(book);

// - Удалите свойство `author`.
delete book.author;
console.log(book);



// 2. Создайте пустой объект `user`, затем помощью `prompt` заполните объект данными: `name`, `age` и `email`.
const user = {};
user.name = prompt("Введите ваш имя:");
user.age = +prompt("Введите ваш возраст:");
user.email = prompt("Введите ваш e-mail:");
console.log(user);

// - Добавьте новое свойство `isAdmin` со значением `false`.
user["isAdmin"] = false;
console.log(user);

// - Измените возраст пользователя, увеличив его на 1.
user.age += 1;
console.log(user);

// - Удалите свойство `email`.
delete user.email;
console.log(user);



// 3. Вы создаёте список участников вебинара. Ваша задача выполнить все следующие операции с помощью метода `splice`.
// - Создайте массив участников: ["Ернар", "Айгуль", "Данияр"].
const participants = ["Ернар", "Айгуль", "Данияр"];
console.log(participants);

// - Добавьте участника "Гульмира" на вторую позицию.
participants.splice(1, 0, "Гульмира");
console.log(participants);

// - Удалите участника "Данияр".
participants.splice(3, 1);
console.log(participants);

// - Замените "Айгуль" на "Еркебулан".
participants.splice(2, 1, "Еркебулан");
console.log(participants);



// 4. Создайте простое приложение, которое:
// - Устанавливает начальный баланс пользователя равным 100.
// - Каждый раз запрашивает у пользователя число через `prompt`. Это число будет вычитаться из текущего баланса.
// - Если после вычитания баланс становится отрицательным, цикл завершается, и появляется `alert` с сообщением, что баланс отрицательный.
// - До завершения цикла остаток баланса должен выводиться в консоль (`console.log()`).
let balance = 100;

while (true) {
  const amount = +prompt("Введите число для вычитания из баланса:"); 

  if (isNaN(amount)) {
    alert("Пожалуйста, введите корректное число.");
    continue;
  }

  balance -= amount;
  console.log("Остаток баланса: " + balance);

  if (balance > 0) {
    alert("Баланс стал отрицательным!");
    break;
  }
}
