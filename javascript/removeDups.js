function removeDups(objects) {
    for (let i = 0; i < objects.length; i++) {
        for (let j = i + 1; j < objects.length; j++) {
            if (objects[i] === objects[j]) {
                objects.splice(j, 1);
            }
        }
    }
    console.log(objects);
}

removeDups([1, 0, 1, 0]);
removeDups(["the" , "big" , "the"])