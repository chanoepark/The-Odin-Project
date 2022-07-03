function isAlpha(ch) {
    return /^[a-z]$/i.test(ch);
}

const palindromes = function (str) {
    let leftPtr = 0;
    let rightPtr = str.length - 1;

    while (leftPtr < rightPtr) {
        if (isAlpha(str[leftPtr]) && isAlpha(str[rightPtr])) {
            if (str[leftPtr].toLowerCase() !== str[rightPtr].toLowerCase())
                return false;
            leftPtr += 1;
            rightPtr -= 1;
        }
        else if (!isAlpha(str[leftPtr]))
            leftPtr += 1;
        else if (!isAlpha(str[rightPtr]))
            rightPtr -= 1;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
