//Q:8
//Javascript Program to Check if a number is Positive, Negative, or Zero
const prompt=require('prompt-sync')();
let num=prompt(`Enter a number:`);
function checkNum()
{
    if(num>0)
    {
        console.log(`Number is positive`);
    }
    else if(num<0)
    {
        console.log(`Number is negetive`);
    }
    else
    {
        console.log(`Number is Zero`);
    }
}
checkNum();