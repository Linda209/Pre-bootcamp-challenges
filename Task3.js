function check65(a, b) {
    sum = a + b;

    if (a == 65) {
        return true;
    }
    if (b == 65) {
        return true;
    }

    if (sum == 65) {
        return true;
    } else {
        return false;
    }
}
console.log(check65(65, 7))
