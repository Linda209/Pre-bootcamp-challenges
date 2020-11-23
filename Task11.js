
function Compare(string1, string2) {
    var i = 0;
    var j = 0;

    // nested for loop to loop in every single character and compare string1 with string2 character using charAt with index
    for (i = 0; i < string1.length; i++) {
        for (j = 0; j < string2.length; j++) {
            if (string1.charAt(i) == string2.charAt(j)) {
                var chr = string1.charAt(i);

                console.log(chr);

            }

        }


    }

}

console.log(Compare("Prompt", "Code"));

