const prompt=require('prompt-sync')();
let a=(prompt("enter a number:"));
let table=0;
for(let i=1;i<=10;i++)
{
    table=a*i;
    console.log(table);
}
