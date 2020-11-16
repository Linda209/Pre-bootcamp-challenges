
var cels =50;
var fahre =0;
//declare funtion
function Fahrenheit(cels){

    //calculating Fahrenheit using formula
fahre = cels*9/5+32;


//concating and returning
return cels+" =  "+fahre +" temperature in Fahrenheit";

}

//declare funtion
function Celsius(cels){

   // calculating Celsius using formula
 fahre = 5/9*(cels-32);
return  cels+" =  "+fahre +" temperature in Celsius";

}
console.log(Celsius(cels));
console.log(Fahrenheit(cels));
