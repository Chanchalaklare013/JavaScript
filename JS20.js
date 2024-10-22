//11. JavaScript Program to Find the Factorial of a Number
const prompt=require('prompt-sync')();
let fect=2;
let a=prompt("Enter a Number-");
for(let i=1;i<a;i++)
{
    fect=fect*i;
}
console.log(fect);