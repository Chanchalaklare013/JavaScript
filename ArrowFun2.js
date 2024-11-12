//odd even number
const prompt=require('prompt-sync')()
let even=function(){
    let a=parseInt(prompt("Enter a number"))
    if(a%2==0)
    {
        console.log("even");
    }
    else
    {
        console.log("odd");
    }
}
even();