//1. Write a recursive function to calculate the factorial of a given number.
// const prompt=require('prompt-sync');
// let =prompt("Enter a number");
function recursive(x)
{
    if(x===0)
    {
        return 1
    }
    return x*recursive(x-1);
}

console.log(recursive(4));


