function isValidIP(ip) {
    const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    return ipv4Regex.test(ip);
}

console.log(isValidIP("1.2.3.4"));        
console.log(isValidIP("1.2.3"));  
console.log(isValidIP("1.2.3.4.5"));      
console.log(isValidIP("123.45.67.89"));    
console.log(isValidIP("123.456.78.90"));   
console.log(isValidIP("123.045.067.089"));
