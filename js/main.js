// Інструкція switch (Що будемо порівнювати) {
// case з чим порівнємо (Значення):
// Інструкція яку потрібно виконати при true
// break
// case з чим порівнюємо (Значення):
// Інструкція яку потрібно виконати при true
// break
// default:
// Інструкія яку виконаємо якщо в усіх кейсах false
// }
// const whatStaus = prompt("Який у вас тип підписки?");

// switch (whatStaus) {
//     case "free":
//     alert("У вас підписка free");
//     break
//     case "pro":
//     alert("У вас підписка pro");
//     break
//     case "vip":
//     alert("У вас підписка vip");
//     default:
//     alert("Ви не є користувачем нашої компанії!!!");

// }

// ↑↑ Я взяв конспект з уроку щоб було простіше ↑↑
// ↓↓ Homework ↓↓

// 1. Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: 
//"Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

let food = prompt("Оберіть напій: Кава, чай, сік");

switch (food) {
    case "Кава".toLowerCase():
    alert("Ви обрали каву");
    break
    case "Чай".toLowerCase():
    alert("Ви обрали чай");
    break
    case "Сік".toLowerCase():
    alert("Ви обрали сік");
    break
}

//2. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня 
//(наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

const weekdays = prompt("Оберіть день тижня: Понеділок, вівторок, середа, четвер, п'ятниця, субота і ниділя");

switch (weekdays) {
      case "Понеділок".toLowerCase():
    alert("Іди відпочивай");
    break
      case "Вівторок".toLowerCase():
    alert("Іди відпочивай");
    break
      case "Середа".toLowerCase():
    alert("Іди відпочивай");
    break
      case "Четвер".toLowerCase():
    alert("Іди відпочивай");
    break
      case "П'ятниця".toLowerCase():
    alert("Іди відпочивай");
    break       
      case "Субота".toLowerCase(): 
    alert("Не лінуйся, іди на роботу!");
    break
      case "Ниділя".toLowerCase():
    alert("Не лінуйся, іди на роботу!");
    break
}

//3. 
const year = prompt("Введіть місяць (маленькими літерами)");

switch (year) {
     case "Грудень".toLowerCase():
  alert("Це зима");
  break
     case "Січень".toLowerCase():
  alert("Це зима");
  break
     case "Лютий".toLowerCase():
  alert("Це зима");
  break
     case "Березень".toLowerCase():
  alert("Це весна");
  break
     case "Квітень".toLowerCase():
  alert("Це весна");
  break
     case "Травень".toLowerCase():
  alert("Це весна");
  break
     case "Червень".toLowerCase():
  alert("Це літо");
  break
     case "Липень".toLowerCase():
  alert("Це літо");
  break
     case "Серпень".toLowerCase():
  alert("Це літо");
  break
     case "Вересень".toLowerCase():
  alert("Це осінь");
  break
     case "Жовтень".toLowerCase():
  alert("Це осінь");
  break
     case "Листопад".toLowerCase():
  alert("Це осінь");
  break
}

//3. 
const daysInMounth = prompt("Введіть місяць (маленькими літерами)");

switch (daysInMounth) {
  case "Грудень".toLowerCase():
alert("В цьому місяці 31 день");
break
  case "Січень".toLowerCase():
alert("В цьому місяці 31 день");
break
  case "Лютий".toLowerCase():
alert("В цьому місяці 28 днів");
break
  case "Березень".toLowerCase():
alert("В цьому місяці 31 день");
break
  case "Квітень".toLowerCase():
alert("В цьому місяці 30 днів");
break
  case "Травень".toLowerCase():
alert("В цьому місяці 31 день");
break
  case "Червень".toLowerCase():
alert("В цьому місяці 30 днів");
break
  case "Липень".toLowerCase():
alert("В цьому місяці 31 день");
break
  case "Серпень".toLowerCase():
alert("В цьому місяці 31 день");
break
  case "Вересень".toLowerCase():
alert("В цьому місяці 30 днів");
break
  case "Жовтень".toLowerCase():
alert("В цьому місяці 31 день");
break
  case "Листопад".toLowerCase():
alert("В цьому місяці 30 днів");
break
}

//4. 
const trafficLights = prompt("Введіть колір (червоний, жовтий, зелений)");

 switch (trafficLights) {
  case "червоний".toLowerCase():
  alert("СТОП!");
  break
  case "жовтий".toLowerCase():
  alert("Чекати!");
  break
  case "зелений".toLowerCase():
  alert("Йти");
  break
 }

 //5.
const num1 = Number(prompt("Введіть 1 число"));
const action = prompt("Введіть дію яка буде виконуватись між цимим 2 числами");
const num2 = Number(prompt("Введіть 2 число"));


switch (action) {
    case "+":
  console.log(num1 + num2); 
  break
    case "-":
  console.log(num1 - num2);
  break
    case "*":
  console.log(num1 * num2);
  break
    case "/":
  console.log(num1 / num2);
  break
} 