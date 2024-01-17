function HighestDigit(number) {
    let strNumber = number.toString();
    let high = 0;

    for (let digit of strNumber) {
        let digitValue = parseInt(digit);

        if (digitValue > high) {
            high = digitValue;
        }
    }

    return high;
}

console.log(HighestDigit(123456789));