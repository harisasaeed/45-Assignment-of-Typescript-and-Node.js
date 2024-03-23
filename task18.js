"use strict";
//task 18
//store the location in an arry
let placestovisit = ["Pakistan", "Afghanistan", "Iran", "saudi", "Qatar"];
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
console.log("reverse order:", placestovisit);
//reverse the order of the list again to get back the original order
placestovisit.reverse();
console.log("back to original order:", placestovisit);
//sort the array in alphabatical order
placestovisit.sort();
console.log("sorted in alphabatical order:", placestovisit);
//sort the array in reverse alphabatic order
placestovisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphbatical order:", placestovisit);
