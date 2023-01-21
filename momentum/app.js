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
