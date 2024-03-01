// Ex01
function mergeArray() {
    var array1 = [1,2,3];
    var array2 = ['a','b','c']; 
    var result = array1.concat(array2);
    console.log(result);
}

//Ex02
function checkEven(number){
    return number % 2 ==0;
}

function checkEveryEvenArray(){
    var array1 = [1,2,3,4,5];
    var array2 = [2,4,6];
    var result1 = array1.every(checkEven) ? "Yes" : "No";
    var result2 = array2.every(checkEven) ? "Yes" : "No";
    console.log("All element in array1 are even: ", result1);
    console.log("All element in array2 are even: ", result2);
} 

//Ex03
function checkSomeEvenArray(){
    var array1 = [1,2,3,4,5];
    var array2 = [2,4,6];
    var result1 = array1.some(checkEven) ? "Yes" : "No";
    var result2 = array2.some(checkEven) ? "Yes" : "No";
    console.log("Some element in array1 are even: ", result1);
    console.log("Some element in array2 are even: ", result2);
} 

//Ex04
function checkPositive(number) {
    return number >=0;
}

function positive() {
    var array = [1,-2,3,-4,5,6];
    var result = array.filter(checkPositive);
    console.log("Positive: ", result);
}

//Ex04
function firstPositive() {
    var array = [-1,-2,3,4,-5];
    var result = array.find(checkPositive);
    var result1= array.findIndex(checkPositive);
    console.log("First positive: ",result);
    console.log("Fist positive index: ",result1);
}

//Ex05
function checkDivisible(number) {
    return number % 5 ==0;
}
function divisibleBy5() {
    var array = [1,5,30,26];
    var result = array.forEach(checkDivisible);
    console.log("Divisible by 5: ",result);
}
 
//Ex05
function findIndexOfValue() {
    var array = [1,2,3,4,5,2,3,5];
    var number = document.getElementById("ex05").value;
    var result = array.lastIndexOf(number);
    console.log("Index of value: ",result);
}
//Ex06
function joinElements() {
    var array = [1,2,3,4,5,6,7];
    var result = array.join(' ');
    console.log("After join: ",result);
}
//Ex07
function changeToAbs(number){
    return Math.abs(number);
}

function absolute() {
    var array = [2,-1,-7];
    var result = array.map(changeToAbs);
    console.log(result);
}
