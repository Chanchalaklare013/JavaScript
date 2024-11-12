const prompt=require('prompt-sync')()
let nsum=()=>
{
let sum=0;
for(let i=1;i<=10;i++)
{
   // const prompt=require('prompt-sync')()
    let a= parseInt(prompt(`Enter a number ${i}`));
    sum=sum+parseFloat(a);
}
console.log(sum)
}
nsum();
