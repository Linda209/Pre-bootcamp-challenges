
var num = 133;
function time(num) {
    
    var hours = (num / 60);
    // Math.floor Returns the greatest integer less than or equal to its numeric argumen and put it to rh variable
    var rh = Math.floor(hours);
    var mins = (hours - rh) * 60;
  // Math.round Returns a supplied numeric expression rounded to the nearest integer and put it in the rm variable.
    var rm = Math.round(mins);
    return  rh + " hours and " + rm + " minutes.";
    }
    
    console.log(time(num));
    