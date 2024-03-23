"use strict";
//Task 16
let guests = ["Albert Einstine", "Marie curie", "Leonardo da vinici"];
console.log("Great news! I found a bigger dinner table!");
//Adding more guests
guests.unshift("Issac Newton");
guests.splice(guests.length / 2, 0, "Charlie Drawn");
guests.push("Ada LoveLace");
guests.forEach(guests => {
    console.log(`Dear ${guests}, Would you like to join me for dinner?`);
});
