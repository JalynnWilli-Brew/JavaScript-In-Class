// 1) Create 3 arrays, One with all String data types, one with all Numbers data types, and one with Boolean data types.  
// You will need to add sample data to each array (don't over think this). Each array should have at least 5 elements.. 

// 2) Next create a function that can take any of these arrays as a parameter and add an additional String, Number, 
//or Boolean depending on which array was passed in. 

// Hint: You will need an array method to add new items to the end of the array. 
//You will also need conditionals set up to check the item at index 0 so you know what array was passed into the function.  
//You can use the typeof method to determine what type of data is in the array.  


//Three arrays
let numbers = ["13", "16", "98", "9", "5"];
let cars = [`toyota`, `dodge`, `mercedes`, `volkswagen`, `lexus`];
let bool = [true, false, NaN, ``, null ];

numbers.push("36");
cars.push(`volvo`);
bool.push(0);

console.log(numbers);
console.log(cars);
console.log(bool);
