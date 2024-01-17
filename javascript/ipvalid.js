function isValidIP(ip) {
    // Define a regular expression for IPv4 validation
    const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    // Test the IP against the regular expression
    return ipv4Regex.test(ip);
}

// Test cases
console.log(isValidIP("1.2.3.4"));        // Output: true
console.log(isValidIP("1.2.3"));          // Output: false
console.log(isValidIP("1.2.3.4.5"));      // Output: false
console.log(isValidIP("123.45.67.89"));    // Output: true
console.log(isValidIP("123.456.78.90"));   // Output: false
console.log(isValidIP("123.045.067.089")); // Output: false
