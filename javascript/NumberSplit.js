function NumberSplit(num) {
    let a = 0;
    let b = 0;

    if (num % 2 === 0) {
        a = num / 2;
        b = num / 2;
    } else {
        a = Math.floor(num / 2);
        b = Math.ceil(num / 2);
    }

    let result = [a, b];
    console.log(result);
}

NumberSplit(11);
