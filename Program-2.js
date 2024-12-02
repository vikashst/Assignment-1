//Program to generate the following until a = x [series of numbers as shown in below examples]

function oddNumSeries(a){
    if (a <= 0) {
        return 'Error: Please enter a positive integer.';
    }
    let oddArr = [];
    for(let i=0; i<a; i++ ){
        oddArr.push(1+2*i)
    }
    return oddArr;
}

// let a = parseInt(prompt('Enter a positive integer:- '), 10);
let a = 15;
const result = oddNumSeries(a);

console.log(`Output: ${result}`);