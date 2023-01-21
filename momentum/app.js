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
