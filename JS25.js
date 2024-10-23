//write a function to read 10 values in js and print largest amg them.
const prompt=require('prompt-sync')();

function largest()
{
    let max=0;
    let a;
    
    for(let i=1;i<=10;i++)
    {
        a=parseInt(prompt("enter number"));
        if(a>max)
        {
            max=a;
        }

    }    
        console.log(`Largest value:${max}`)
}
largest();
