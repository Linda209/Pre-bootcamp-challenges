

function Contain3(a, b) {
	var sum = a + b;

	var check = sum.toString();


	for (j = 0; j < check.length; j++) {
		if (check.charAt(j) == "3") {
			console.log(check.charAt(j));

			console.log(sum);
			console.log("match");

			return true;
		}
	}

	if (a == 3 || b == 3) {
		return true;
	}



	for (j = 0; j < check.length; j++) {
		if (
			check.charAt(j) != "3" &&
			a != 3 &&
			b != 3

		) {
			console.log(sum);
			console.log("Not match");

		}
	}
}

console.log(Contain3(104, 119));
