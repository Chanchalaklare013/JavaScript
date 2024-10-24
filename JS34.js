//find the smallest no.
let a=[2,4,1,7,5,8];
        let smallest=a[0]
        for(let i=0;i<a.length;i++){
            if(a[i]<smallest){
                smallest=a[i]
            }
        }
        console.log(smallest)