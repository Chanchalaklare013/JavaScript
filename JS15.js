//Q:6
//const prompt=require('prompt-sync')();
//let a=prompt("enter a num:");
//console.log(a);
// Function to convert kilometers to miles
function convertKilometersToMiles(kilometers) {
    const miles = kilometers * 0.621371; // 1 kilometer = 0.621371 miles
    return miles;
}

// Example usage
const kilometers = 5; // You can change this value to any number of kilometers
const miles = convertKilometersToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
