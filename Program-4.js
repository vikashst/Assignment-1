//Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]

function countMultiples(inputArray) {
    const result = {};

    // Initialize the result object with numbers from 1 to 9
    for (let i = 1; i <= 9; i++) {
        result[i] = 0;
    }

    // Counting multiples.
    for (let i = 1; i <= 9; i++) {
        for (const num of inputArray) {
            if (num % i === 0) {
                result[i]++;
            }
        }
    }

    return result;
}

// Example input
const inputArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = countMultiples(inputArray);

console.log(output);