

function ConvertTime(num) {

  var hours = (num / 60);
  // Math.floor Returns the greatest integer less than or equal to its numeric argumen and put it to rh variable
  var RealHours = Math.floor(hours);
  var mins = (hours - RealHours) * 60;
  // Math.round Returns a supplied numeric expression rounded to the nearest integer and put it in the rm variable.
  var RealMinutes = Math.round(mins);
  return RealHours + " hours and " + RealMinutes + " minutes.";
}

console.log(ConvertTime(133));
