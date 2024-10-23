//write js function to print sum of first 10 natural numbers
function print(a,b)
{
    let sum=0;
    for(i=a;i<=b;i++)
    {
        sum+=i;
    }
    return sum;
}
let s=print(20,30);
console.log(s);