// Ex01
function mergeArray() {
    var array1 = [1,2,3];
    var array2 = ['a','b','c']; 
    var result = array1.concat(array2);
    document.getElementById("ex01").innerHTML = result;
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
    document.getElementById("ex02").innerHTML = result1;
    document.getElementById("ex02").innerHTML = result2;
    console.log("All element in array1 are even: ", result1);
    console.log("All element in array2 are even: ", result2);
} 

//Ex03
function checkSomeEvenArray(){
    var array1 = [1,2,3,4,5];
    var array2 = [2,4,6];
    var result1 = array1.some(checkEven) ? "Yes" : "No";
    var result2 = array2.some(checkEven) ? "Yes" : "No";
    document.getElementById("ex03").innerHTML = result1;
    document.getElementById("ex03").innerHTML = result2;
    console.log("Some element in array1 are even: ", result1);
    console.log("Some element in array2 are even: ", result2);
} 

//Ex04
function checkPositive(number) {
    return number >=0;
}

function positive() {
    var array1 = [1,-2,3,-4,5,6];
    var result = array1.filter(checkPositive);
    document.getElementById("ex04").innerHTML = result;
    console.log("Positive: ", result);
}

//Ex05

function firstPositive() {
    var array1 = [-1,-2,3,4,-5];
    var result = array1.find(checkPositive);
    var result1= array1.findIndex(checkPositive);
    document.getElementById("ex05").value = result1;
    console.log("First positive: ",result);
    console.log("First positive index: ",result1);
}

//Ex06
var array6 = [];

function checkDivisible(number) {
    if (number % 5 ==0){
        array6.push(number);
    }
}

function divisibleBy5() {
    var array = [1,5,30,26];
    array.forEach(checkDivisible);
    document.getElementById("ex06").innerHTML = array6;
    console.log("Divisible by 5: ",array6);
}
 
//Ex07
document.getElementById
function findIndexOfValue() {
    document
    var array1 = [1,2,3,4,5,2,3,5];
    var result1= array1.findIndex(item => item == 2);
    var result2 = array1.lastIndexOf(2);
    document.getElementById("ex07").innerHTML = result1;
    document.getElementById("ex07").innerHTML = result2;
    console.log("Index of value: ",result1);
    console.log("Last index of value ",result2);
}
//Ex08
function joinElements() {
    var array = [1,2,3,4,5,6,7];
    var result = array.join(' ');
    document.getElementById("ex08").innerHTML = result;
    console.log("After join: ",result);
}
//Ex09
function changeToAbs(number){
    return Math.abs(number);
}

function absolute() {
    var array = [2,-1,-7];
    var result = array.map(changeToAbs);
    document.getElementById("ex09").innerHTML = result;
    console.log(result);
}
