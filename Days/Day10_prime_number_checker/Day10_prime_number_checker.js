$(document).ready(function () {
    var input = $('.inputAreaText');
    var output = $('.outputArea');
    var inputNumer;
    var isPrimeNumber = true;

    function primeNumberCal() {
        for (i = 2; i < inputNumer; i++) {
            if (inputNumer % i === 0) {
                isPrimeNumber = false;
                break;
            }
        }
    }

    function outputPrint() {
        if (isPrimeNumber) {
            console.log(isPrimeNumber);
            output.html("<p>" + inputNumer + " is a Prime Number </p>");
        } else {
            output.html("<p>" + inputNumer + " is " + "<span>not</span>" + " a Prime Number </p>");
        }
    }

    input.keypress(function (e) {
        isPrimeNumber = true;
        if (e.keyCode == 13) {
            inputNumer = input.val();
            var isNotANumber = isNaN(inputNumer);
            if (isNotANumber) {
                output.html("<p>" + inputNumer + " is not a Number </p>");
            } else {
                primeNumberCal();
                outputPrint();
            }
        }
    });
});
