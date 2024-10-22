//Q:9
//JavaScript Program to Check Prime Number

const prompt= require("prompt-sync");
//prime no or not
        let a=prompt("Enter the value of a");
        for(let i=1;i<=100;i++){
            let count=0;
            for(let k=1;k,100;k++){
                if(i%k==0){
                    count++;
                }
            }
            if(count==2){
               if(a==i){
                console.log("it is prime no")
               }
               else{
                console.log("It is not a prime no");
               }
            }
        }
       