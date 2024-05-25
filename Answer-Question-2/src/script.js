function isDataCheck(str) {
    let stack = [];
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    const matching = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            if (stack.length === 0 || stack.pop() !== matching[char]) {
                return "NO";
            }
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}


console.log(isDataCheck("{[()]}")); 
console.log(isDataCheck("{[(])}")); 
console.log(isDataCheck("{(([])[])[]}")); 
