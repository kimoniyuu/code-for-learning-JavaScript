function isValidIP(ip) {
    let check = 0
    let IP = ip.split(".")
    console.log(IP)
    for (let i = 0; i < IP.length; i++) {
        console.log(IP[i][0])
        if (IP.length == 4 && IP[i][0] > 0 && IP[i] >= 1&& IP[i] <= 255) {
            check++
        }
        
    }
    if (check == 4) {
        return true;
    }else return false;
}

console.log(isValidIP("1.2.3.4"));        
console.log(isValidIP("1.2.3"));  
console.log(isValidIP("1.2.3.4.5"));      
console.log(isValidIP("123.45.67.89"));    
console.log(isValidIP("123.456.78.90"));   
console.log(isValidIP("123.045.067.089"));
