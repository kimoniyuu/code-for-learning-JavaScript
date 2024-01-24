function isPrime(number) {
    if (number <= 1) {
        return false; // 1 และตัวเลขที่น้อยกว่าหรือเท่ากับ 1 ไม่ใช่ Prime Number
    }
    console.log(Math.sqrt(number))
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // ถ้ามีตัวเลขที่หารลงตัว, ไม่ใช่ Prime Number
        }
    }

    return true; // ถ้าไม่มีตัวเลขที่หารลงตัว, เป็น Prime Number
}

// ตัวอย่างการใช้ฟังก์ชัน
console.log(isPrime(7)); // Output: true (7 เป็น Prime Number)
console.log(isPrime(12)); // Output: false (12 ไม่เป็น Prime Number)
console.log(isPrime(23)); // Output: true (23 เป็น Prime Number)
