
function FindVowels(str) {

  var vowels = ["a", "e", "i", "o", "u"];
  //looping and converting str to lower case 
  for (let char of str.toLowerCase()) {
    //check whether an array includes a certain element
    if (vowels.includes(char)) {

      console.log(char);


    }

  }

}
console.log(FindVowels("llinda"));