
var a =104;
var b =119;



function myFunction(a,b,c){



 var sum = a+b;

   var check = sum.toString();

var doubleCheck ="False";
   
    for(j=0; j<check.length; j++){

        if ( check.charAt(j) =="3"){


          console.log(check.charAt(j));

          console.log(sum);

          // assign doubleCheck variable "True"
          doubleCheck ="True";
          console.log("match");

          
          return true; 

        }
            
    }

    if (a==3|| b==3){
        return true
    }

/* for loop to make sure that a is not = 3 and b is not equal to 3 and the sum is not contain 3
   doubleCheck variable check is assigned "False"

*/

    
    for(j=0; j<check.length; j++){

        if ( check.charAt(j) !="3" && a!= 3 && b!=3&& doubleCheck=="False"){

            console.log(sum);

          console.log("Not match");

          
          return false; 

        }
            
    }

}

console.log(myFunction(a,b));
