//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "harisa saeed";

//in lowercase
console.log("lowercase:", personName.toLowerCase());

//in uppercase
console.log("uppercase:", personName.toUpperCase());

//in titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
