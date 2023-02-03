// ---- Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Get Third Item from Array
console.log(daysOfWeek[3]);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

// ---- Objects
const player = {
  name: "effy",
  age: 27,
  gender: "female",
  points: 10,
  fat: false,
};
console.log(player);
console.log(player.name);
player.fat = true;
player.lastName = "Choi";
console.log(player);

// ---- Functions
function sayHello(nameOfPerson, age) {
  console.log(`Hello my name is ${nameOfPerson}. And I'm ${age} years old.`);
}

sayHello("effy", 26);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function multiply(firstNumber, secondNumber) {
  console.log(firstNumber * secondNumber);
}
plus(1, 3);
multiply(3, 6);

const guest = {
  name: "effy",
  sayHello: function (otherPersonName) {
    console.log(`Hello, ${otherPersonName}. Nice to meet you.`);
  },
};

guest.sayHello("saeyoung");

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
calculator.plus(5, 1);
calculator.power(2, 12);
calculator.times(3, 4);

// Returns
const plusResult = calculator.plus;
const minusResult = calculator.minus;
const divideResult = calculator.divide;
const timesResult = calculator.times;
const powerResult = calculator.power;

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age >= 51 && age <= 80) {
  console.log("You should drink less.");
} else if (age === 100) {
  console.log("Cheers");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}

const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
