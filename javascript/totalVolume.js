function totalVolume() {
    let objects = Array.from(arguments);
    let result = 0;

    for (let i = 0; i < objects.length; i++) {
        let volume = 1;

        for (let j = 0; j < objects[i].length; j++) {
            volume *= objects[i][j];
        }

        result += volume;
    }

    console.log(result);
}

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
