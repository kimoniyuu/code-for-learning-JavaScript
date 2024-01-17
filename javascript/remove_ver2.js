function removeDups(array) {
    let remove = [];
    remove.push(array[0]);
    for (let i = 1; i < array.length; i++) {
        if (!remove.includes(array[i])) {
        }
    }
    return remove;
}

console.log(removeDups(["foo","foo","bar","default","bar","default"]));