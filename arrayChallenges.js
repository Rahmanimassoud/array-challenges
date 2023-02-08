// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    let foodCount = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy");
            foodCount++;
        }
    }
    if (foodCount == 0){
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum += arr[i];
    }

    let avg = sum / arr.length;
    let count = 0;
    // count how many values are greater than the average
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Write a function that will reverse the values of an array and return them.

function reverse(arr) { //we used the 2 pointer approach. 
    let left = 0;  //pointer 1
    let right = arr.length-1; //pointer 2, starting from the end of array

    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Write a function that will return an array of Fibonacci numbers up to a given length n.
function fibonacciArray(n) {

    let fibArr = [0, 1];
    while(fibArr.length < n) {
        let last = fibArr[fibArr.length-1];
        let prevlast = fibArr[fibArr.length-2];
        fibArr.push(last + prevlast);
    }
    return fibArr;
}

var result = fibonacciArray(30);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]s

