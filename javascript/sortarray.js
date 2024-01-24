function sortArray (...num) {
    console.log(num)
    for (let i = 0; i < num.length ; i++) {
        for(let j = i + 1; j < num.length ; j++) {
            if(num[i] > num[j]) {
                let tpm = num[i]
                num[i] = num[j]
                num[j] = tpm
            }
        }
    }
    console.log(num)
}

sortArray(1,23,43,35,5332,334,3,243,345,34,23)