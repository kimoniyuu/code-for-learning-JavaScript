function HighestDigit(number) {
    let strNumber = number.toString();
    let high = 0;

    for (let digit of strNumber) {
        let digitValue = parseInt(digit);

        if (digitValue > high) {
            high = digitValue;
        }
    }

    console.log(high);
}

HighestDigit(453);