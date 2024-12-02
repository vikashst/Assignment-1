
function oddNumSeries2(a) {
    if (a <= 0) {
        return 'Error: Please enter a positive integer.';
    }
    let oddArr = [];
    const limit = a % 2 === 0 ? a - 1 : a; // Adjusting limit for even numbers.
    for (let i = 0; i < limit; i++) {
        oddArr.push(1 + 2 * i);
    }
    return oddArr;
}

// let a = parseInt(prompt('Enter a positive integer:- '), 10);
let a = 10;      // Input
const result = oddNumSeries2(a);

console.log(`Output: ${result}`);