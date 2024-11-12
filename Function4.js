function f1(a){
    console.log("<br>Inside F1 a : "+a);  
    function f2(b){
      console.log("<br>Inside F2 a : "+a+" b : "+b);
    }
    f2(10);
  }

  f1(20);

