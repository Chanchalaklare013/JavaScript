// smallest number of array
let a=[2,3,4,5,6,7,7,8,1,6];
let temp;
for(i=0;i<a.length;i++)
{
    for(j=i+1;j<a.length;j++)
    {
        if(a[i]>a[j])
        {
         temp=a[i];
         a[i]=a[j];
         a[j]=temp;
        }
    }
}
console.log(`Smallest number:${a[0]}`);