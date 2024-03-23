"use strict";
//Task 17
//Initial list of guests
let Guests = ["Emily", "Buddy", "Carry", "Dany", "Harsh"];
//Informing that only two peoples can be invited
console.log("due to limited space, only two people can invited for the dinner.");
// Removing guests until only two names remain
while (Guests.length > 2) {
    const removedguests = Guests.pop();
    console.log(`Sorry, ${removedguests},you are no longer invited to dinner.`);
}
let guest = ["Emily", "Buddy",];
//printing invitation to the remaining two guests
Guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to the dinner.`);
});
let guests = [];
// Removing the last two name from the list
guests.pop();
guests.pop();
//printing the finall list to comfirm its empty
console.log("final guests list:", Guests);
