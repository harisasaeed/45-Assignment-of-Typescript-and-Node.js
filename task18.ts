//task 18

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//store the location in an arry
let placestovisit: string[] = ["Pakistan", "Afghanistan", "Iran", "saudi", "Qatar"];

//print the arrasy in its orginal order
console.log("original order:", placestovisit);

//print the array an alphabatical order without modify the actual list
console.log("alphabatical order", [...placestovisit].sort());

//show the array is still in its original order
console.log("original order after sorting:", placestovisit);

//print the array in reverse alphabatical order without changing the order of the original list
console.log("reverse alphabatic order:", [...placestovisit].sort().reverse());

//show the array is still in its original order
console.log("original order after reverse sorting:", placestovisit);

//reverse the order of the list
placestovisit.reverse();
console.log("reverse order:",placestovisit);

//reverse the order of the list again to get back the original order
placestovisit.reverse();
console.log("back to original order:",placestovisit);

//sort the array in alphabatical order
placestovisit.sort();
console.log("sorted in alphabatical order:",placestovisit);

//sort the array in reverse alphabatic order
placestovisit.sort((a, b) => b.localeCompare(a) );
console.log("sorted in reverse alphbatical order:",placestovisit );