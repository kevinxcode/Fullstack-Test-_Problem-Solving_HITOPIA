function isPalindrom(str) {
    const len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findHighest(str, k) {
    if (isPalindrom(str) || k === 0) {
        return str;
    }

    const len = str.length;
    const arr = str.split('');
    const mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            arr[i] = arr[len - 1 - i] = Math.max(arr[i], arr[len - 1 - i]);
            k--;
        }
    }


    return findHighest(arr.join(''), k);
}


console.log(findHighest("3943", 1)); 

