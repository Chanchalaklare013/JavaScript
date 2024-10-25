//Prg to search an element in an array using lenear & binary search.
let arr=[1,2,3,4,5,6,7,8,9,11,12,13,14,15];

let s=0;
let l=arr.length-1
let find=10;
let flag=0;
for(let i=0;i<arr.length;i++)
{
    let mid=(s+l)/2
    let midIn=Math.floor(mid);// romove .00
    if(arr[midIn]==find)
    {
        flag=1;
        break;
    }
    else if(find>arr[midIn])
    {
        s=midIn+1
    }
    else{
        l=midIn-1
    }

}
if(flag==1){
    console.log("persent");
}
else{
    console.log("not present");
    
}

