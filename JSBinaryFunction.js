//const prompt=require('prompt-sync')();
function binary()
{
    let s=0,m,e,searchs,i;
    let flag=0;
    let a=[10,15,18,32,88,93];
        e=a.length-1;
        //searchs=parseInt(prompt("Enter a number to search"));
         searchs=document.getElementsById("input").value;
        for(i=0;i<a.length;i++)
        {
            m=parseInt((s+e)/2);
            if(searchs==a[m])
            {
                flag=1;
                break;
            }
            else if(searchs>a[m])
            {
                s=m+1;
            }
            else
            {
                e=m-1;
            }

        }
        if(flag==1)
        {
            alert("number is present")
        }
        else{
            alert("not found")
        }

}
binary();