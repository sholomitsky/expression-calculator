function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let left = [],
        right = [];
    let arr = expr.split('');
    for (a = 0; a <= arr.length - 1; a++) {
        if (arr[a] === '(') {
            left.push(arr[a]);
        }
        if (arr[a] === ')') {
            right.push(arr[a]);
        }
        if ((arr[a] + arr[a + 1] + arr[a + 2]) === '/ 0') {
            throw new Error('TypeError: Division by zero.')
        }
    }
    if (left.length === right.length) {
        return new Function('return ' + expr)();
    } else {
        throw ("ExpressionError: Brackets must be paired");
    }
}

module.exports = {
    expressionCalculator
}