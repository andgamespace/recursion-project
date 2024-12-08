const fibInput = document.getElementById("fibInput");
const fibRunButton = document.getElementById("fibRunButton");
const fibForm = document.querySelector(".fibForm");
const resultTextDiv = document.getElementById("resultTextDiv");
const resultText = document.getElementById("resultText");
const mergeForm = document.getElementById("mergeSortForm");
const mergeButton = document.getElementById("mergeSortButton");
const mergeInput = document.getElementById("mergeSortInput");


fibForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const inputText = fibInput.value;
    

    if(isNaN(inputText)){
        console.log("enter a number");
    }
    else{
        let myArr = [];
        
        console.log(fibonacci(inputText, myArr));
        console.log(fibonacciRecursion(inputText));
    }
})
mergeForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const inputText = mergeInput.value;
    
    let numberArray = [];

    const inputArray = inputText.split(",");
    for(let i = 0; i < inputArray.length; i++){
        const element = inputArray[i].trim();
        if(element !== ""){
            numberArray.push(element);
        }
    }
    console.log("Parsed array: ", numberArray);
    console.log("Sorted array: ", mergeSort(numberArray));
    displayResult(mergeSort(numberArray));

})
function fibonacci(length, myArr){
    //let myArr = [];
    for(let i = 0; i < length; i++){
        if(i>1){
            myArr.push(myArr[i-1] + myArr[i-2]);
            //displayResult(((i-1) + (i-2)))
        } else {
            myArr.push(i);
        }

    }
    displayResult(myArr);
    return myArr;
}
function fibonacciRecursion(n, fibArray = [0, 1]){
    if(fibArray.length >= n){
        return fibArray.slice(0, n);
    }
    const nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(nextFib);
    return fibonacciRecursion(n, fibArray);
    
}
function displayResult(result){
    resultText.innerText = result;
}
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0, mid));
    var subRight = mergeSort(arr.slice(mid));
    return merge(subLeft, subRight);
}
function merge(a, b){
    var result = [];
    while((a.length>0) && (b.length>0)){
        result.push(a[0] < b[0] ? a.shift() : b.shift());
    }
    return result.concat(a.length? a : b);
}