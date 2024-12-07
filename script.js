const fibInput = document.getElementById("fibInput");
const fibRunButton = document.getElementById("fibRunButton");
const fibForm = document.querySelector(".fibForm");
const resultTextDiv = document.getElementById("resultTextDiv");
const resultText = document.getElementById("resultText");


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
function fibonacci(length, myArr){
    //let myArr = [];
    for(let i = 0; i <= length; i++){
        if(i>1){
            myArr.push((i-1) + (i-2));
            //displayResult(((i-1) + (i-2)))
        } else {
            myArr.push(i);
        }

    }
    displayResult(myArr);
    return myArr;
}
function fibonacciRecursion(n){
    if(n<2){
        return 1;
    }
    else{
        return fibonacciRecursion(n-2) + fibonacciRecursion(n-1);
    }
}
function displayResult(result){
    resultText.innerText = result;
}