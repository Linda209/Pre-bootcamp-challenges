

var str = "lInda";



function vwl(str) {
 
    var vv=["a","e","i","o","u"];


//looping and converting str to lower case so that just incase the user put the upper case
     for(let char of str.toLowerCase()){

        //Determines whether an array includes a certain element, returning true or false as appropriate.
        if(vv.includes(char)){

          console.log(char);
        

        }

     }
      
    }
    console.log(vwl(str));