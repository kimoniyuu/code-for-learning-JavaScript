function capToFront(string) {
    let low = '';
    let upper = '';

    for (let a of string) {
        if (a === a.toUpperCase()) {
            upper += a;
        } else {
            low += a;
        }
    }

    let result = upper + low;
    console.log(result);
}

capToFront("HappY");
