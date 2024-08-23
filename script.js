//Sorting an array in ascending order
/*function sortArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let sort = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = sort;
    
            }
        }
    }
return arr;
} 

arr = [12, 4, 11, 17, 9, 5, 8, 20, 6]
let sortedArray = sortArray(arr);
console.log(sortedArray);






// // Arrays that sum up to a given number
function sumOfPairs(sum, numbers) {
    let pairs = [];
    let numSet = new Set();

    for  (let num of numbers) {
        let complement = sum - num;
        if (numSet.has(complement)) {
            pairs.push([complement, num]);
        }
        numSet.add(num);
    }
    return pairs;
}

let value = 4;
let arr = [3, 5, 2, 4, 8, 11, 1, 6];
let result = sumOfPairs(value, arr);
console.log("Pairs that sum up to ", value, ":", result);






//multiplication table from 1
function generateMultiplicationTable(n) {
    let table = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            table += i + " x " + j + " = " + (i * j) + "\t";
        }
        table += "\n";
    }
    return table
}

let number = 7;

let multiplicationTable = generateMultiplicationTable(number);
console.log(multiplicationTable);
*/




function makeLine(length) {
    let line = "";
    for (let j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(length) {
    let triangle = "";
    
    let lineNumber = 1;
    
    for(lineNumber=1; lineNumber<=length; lineNumber++){
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

console.log(buildTriangle(10));
