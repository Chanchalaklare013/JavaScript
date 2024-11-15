function f1(a,b,callbackFirst, callbackSecond){
    var result = a + b;
    console.log("<br>Addition : "+result);
    callbackFirst(result);
    callbackSecond(result);
  }
  

  f1(-20,11,function(x){
    if( x % 2!=0){ console.log("<br>ODD") }else{ console.log("<br>EVEN");}
  }, function(x){
      if(x > 0)
        console.log("<br>Positive Result");
      else if(x < 0)
            console.log("<br>Negative Result");
           else
            console.log("<br>Neutral Result");   
  });