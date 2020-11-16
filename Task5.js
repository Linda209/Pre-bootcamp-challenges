var a=7;
var b=9;
var c=11;


// function and passing 3 numbers that are in the variable a,b,c
function myFunction(a,b,c){

    // using sqrt the method of Returns the square root of a number 
    var pre = (a+b+c)/2;
    var area = Math.sqrt(pre*(pre-a)*(pre-b)*(pre-c));
   return "area ="+area;
    


} 
  console.log(myFunction(a,b,c));

