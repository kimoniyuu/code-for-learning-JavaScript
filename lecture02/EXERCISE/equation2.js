function equation(expr) {
    const operators = ['+', '-', '*', '/'];
    const nums = [];
    const ops = [];

    let num = '';
    for (let i = 0; i < expr.length; i++) {
        const char = expr[i];
        if (char === ' ') {
            continue;
        }
        if (operators.includes(char)) {
            nums.push(parseFloat(num));
            num = '';
            while (ops.length > 0 && precedence(ops[ops.length - 1]) >= precedence(char)) {
                processStack(nums, ops);
            }
            ops.push(char);
        } else {
            num += char;
        }
    }
    nums.push(parseFloat(num));

    while (ops.length > 0) {
        processStack(nums, ops);
    }

    return nums[0];
}

function precedence(op) {
    if (op === '+' || op === '-') {
        return 1;
    }
    if (op === '*' || op === '/') {
        return 2;
    }
    return 0;
}

function processStack(nums, ops) {
    const num2 = nums.pop();
    const num1 = nums.pop();
    const op = ops.pop();
    let result;
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    nums.push(result);
}

console.log(equation("1+1")); // Output: 2
console.log(equation("7*4-2")); // Output: 26
console.log(equation("1+1+1+1+1")); // Output: 5
console.log(equation("1+2+3+4+5")); // Output: 5
