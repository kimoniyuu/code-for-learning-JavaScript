let value1 = ['apple', 1, false];
let value2 = ['fries', 1, true];
let value3 = ['mars', 9, 'apple'];

let txt = "";

for (let i = 0; i < value1.length; i++) {
    for (let j = 0; j < value2.length; j++) {
        if(value1[i] === value2[j]) {
            txt += "value1 and value2 have["+ value1[i] + "]" + "same\n";
        }
    }
}

for (let i = 0; i < value1.length; i++) {
    for (let k = 0; k < value3.length; k++) {
        if(value1[i] === value3[k]) {
            txt += "value1 and value3 have["+ value1[i] + "]" + "same\n";
        }
    }
}

for (let j = 0; j < value2.length; j++) {
    for (let k = 0; k < value3.length; k++) {
        if(value2[j] === value3[k]) {
            txt += "value2 and value3 have["+ value1[i] + "]" + "same\n";
        }
    }
}

console.log(txt);


