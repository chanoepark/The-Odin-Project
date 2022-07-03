const fibonacci = function(num) {
    if (num < 0)
        return 'OOPS';
    
    let result = 1;
    let prev = 1;
    let tmp = 0;

    for (let i = 3; i <= num; i++) {
        tmp = result;
        result += prev;
        prev = tmp;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
