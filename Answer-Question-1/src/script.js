function calculate(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

function generate(string) {
    let weights = [];
    let i = 0;
    while (i < string.length) {
        let j = i;
        while (j < string.length && string[j] === string[i]) {
            j++;
        }
        let weight = calculate(string[i]);
        for (let k = 1; k <= j - i; k++) {
            weights.push(weight * k);
        }
        i = j;
    }
    return weights;
}

function querry(string, queries) {
    let weights = generate(string);
    let results = [];
    for (let query of queries) {
        if (weights.includes(query)) {
            results.push("Yes");
        } else {
            results.push("No");
        }
    }
    return results;
}


let string = "abbcccd";
let queries = [1, 3, 9, 8];
console.log(querry(string, queries)); 
