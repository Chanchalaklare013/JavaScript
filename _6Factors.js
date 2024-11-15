const prompt=require('prompt-sync')();
let fno=(prompt("enter a number"));
for(let i=1;i<=fno;i++)
    {
        if(fno%i==0)
        {
            console.log(i);
        }

    }