//Q:7
// Function to convert Celsius to Fahrenheit
//F=(C*5/9)+32
function convertCelsiusToFahrenheit(celsius) 
{
    const fahrenheit = (celsius * 9/5) + 32; // Conversion formula
    return fahrenheit;
}


const celsius = 25; 
// You can change this value to any temperature in Celsius
const fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`);
