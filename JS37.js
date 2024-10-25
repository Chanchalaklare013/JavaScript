//Prg to replace all array elements of an array with 'hello' where it is an even no./5
let ar=[2,5,35,20,14,17,47,20]
// even no= hello
for(let i=0;i<ar.length;i++)
{
    if(ar[i]%2==0)
    {
        ar[i]="hello";
    }
}
console.log(ar);

//hello =5;

for(let i=0;i<ar.length;i++)
{
    if(ar[i]%5==0)
    {
        ar[i]="hey";
    }
}
console.log(ar);



