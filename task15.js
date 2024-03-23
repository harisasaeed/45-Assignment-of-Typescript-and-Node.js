"use strict";
//task 15
let guestsArr = ["Nokila Tesla", "Sasha", "Marie", "saad",];
let canNotAttend = "saad";
console.log(canNotAttend + " " + "can not attend the dinner.");
let newguest = "Harry";
guestsArr[guestsArr.indexOf(canNotAttend)] = newguest;
console.log(guestsArr);
guestsArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));
