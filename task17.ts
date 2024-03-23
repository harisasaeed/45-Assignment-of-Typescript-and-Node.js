//Task 17

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//Initial list of guests
let Guests: string[] = ["Emily", "Buddy", "Carry", "Dany", "Harsh"];

//Informing that only two peoples can be invited
console.log("due to limited space, only two people can invited for the dinner.");

// Removing guests until only two names remain
while (Guests.length > 2){
   const removedguests = Guests.pop();
    console.log(`Sorry, ${removedguests},you are no longer invited to dinner.`);
}
let guest: string[] = ["Emily", "Buddy",];

//printing invitation to the remaining two guests
Guests.forEach ((guest) => {
   console.log(`Dear ${guest}, you are still invited to the dinner.`);

});
let guests: string[] = [];
// Removing the last two name from the list
guests.pop();
guests.pop();

//printing the finall list to comfirm its empty
console.log("final guests list:", Guests);