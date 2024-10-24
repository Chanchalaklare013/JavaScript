//js prg to pass an array of 10 elements into a function & state only multiplication 
        //of 5 into a new array
        let a=[1,2,3,4,5,6,7,8,9,10];
     
        function multiple(){
          let c=[];
          for(let i=0;i<a.length;i++){
              if(a[i]%5==0){
                 c.push(a[i])
              }
          }
          console.log(c);
          
      }
      multiple(a);