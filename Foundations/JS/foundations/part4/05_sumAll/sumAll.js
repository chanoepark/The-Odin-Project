const sumAll = function(firstNum, secondNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum))
        return 'ERROR';

    let result = 0;
    const startNum = firstNum < secondNum ? firstNum : secondNum;
    const endNum = firstNum < secondNum ? secondNum : firstNum;

    if (startNum < 0)
        return 'ERROR';

    for (let i = startNum; i <= endNum; i++)
        result += i;

    return result;
};

// Do not edit below this line
module.exports = sumAll;
