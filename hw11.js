//Задача 1. Написати скріпт який бере число у користувача і підносить його в квадрат.
let a;
a = prompt("Задача 1. Число користувача підносить в квадрат. Введіть число", 0);
alert("Квадрат Вашого числа " + a + " становить " + a ** 2);

//Задача 2. Написати скріпт, який приймає від користувача його ім”я, суму депозиту, і строк дії депозиту (місяці), і виводить інфу скільки людина заробить  за цей проміжок часу. Депозитна ставка - 20% річних. Повертає повідомлення:” Шановний …., Ви внесли …. грн., під 20% річних, на термін … місяців. За цей період часу Ви заробите … грн.

let userName, depositAmount, depositTerm;

userName = prompt("Задача 2. Введіть Ваше ім”я", "");
depositAmount = prompt(
  "Яку суму у грн. ви бажаєте покласти під 20% річних?",
  0
);
depositTerm = prompt("На який час (у місяцах)?", 0);
alert(
  "Шановний(a) " +
    userName +
    ", Ви бажаєте внести " +
    depositAmount +
    "грн. під 20% річних на термін " +
    depositTerm +
    " місяців. За цей проміжок часу Ви заробите " +
    (sum = ((depositAmount * 1.2) / 12) * depositTerm) +
    "грн." +
    " та сума, яку ви отримаєте, складає " +
    (+depositAmount + +sum) +
    "грн."
);

// Задача 3. Написати скріпт який бере у користувача два числа a i b, і виводить їх суму, різницю, множення і ділення.

alert(
  "Задача 3. Бажаєте дізнатися результати суми, різниці, множення та ділення двох довільних чисел ? "
);
let d = prompt("Введіть перше число");
let m = prompt("Введіть друге число");
alert(
  "Та-дам! Сума становить " +
    (+d + +m) +
    ", різниця = " +
    (d - m) +
    ", добуток =" +
    d * m +
    ", частка =" +
    d / m
);
