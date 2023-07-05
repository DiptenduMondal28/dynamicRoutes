"use strict";
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return +num1 + +num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
}
const numResult = [];
const stringResultArray = [];
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const stringResult = add(num1, num2);
    //console.log(stringResult as string);
    stringResultArray.push(stringResult);
    printResult({ val: result, timeStamp: new Date() });
    console.log(numResult, stringResultArray);
});
