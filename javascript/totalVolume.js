function totalVolume(...objects) {
    let object = objects;
    let result = 0;

    for (let i = 0; i < object.length; i++) {
        let volume = 1;

        for (let j = 0; j < object[i].length; j++) {
            volume *= object[i][j];
        }

        result += volume;
    }

    console.log(result);
}

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
