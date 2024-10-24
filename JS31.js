//store employee details in array and reverse that array
let arr=[1,"divya","manager",24000,5]
function employee(employeeDetail)
{
 for(i=arr.length-1;i>=0;i--)
 {
    console.log(arr[i])
 }
}
employee(arr);