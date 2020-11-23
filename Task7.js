
var Celsius = 50;
var Fahrenheit = 0;
//declare funtion
function CalculateFahrenheit(Celsius) {

  //calculating Fahrenheit using formula
  Fahrenheit = Celsius * 9 / 5 + 32;

  //concating and returning
  return Celsius + " =  " + Fahrenheit + " temperature in Fahrenheit";

}

//declare funtion
function CalculateCelsius(Celsius) {

  // calculating Celsius using formula
  Fahrenheit = 5 / 9 * (Celsius - 32);
  return Celsius + " =  " + Fahrenheit + " temperature in Celsius";

}
console.log(CalculateCelsius(Celsius));
console.log(CalculateFahrenheit(Celsius));
