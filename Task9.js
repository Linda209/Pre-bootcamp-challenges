var multipl = function (number) {
    var sum = 0;
    //using for statement and if condition and moding  
    for (var i = 1; i < number; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
    console.log(sum);
};


multipl(1000);