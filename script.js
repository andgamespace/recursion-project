const fibInput = document.querySelector(".fibInput");
const fibRunButton = document.getElementById("fibRunButton");
const fibForm = document.querySelector(".fibForm");
const resultTextDiv = document.getElementById("resultTextDiv");
const restultText = document.getElementById("resultText");


fibForm.addEventListener("submit", event=>{
    event.preventDefault();
    const inputText = fibInput.value;

    if(isNaN(inputText)){
        console.log("enter a number");
    }
    else{
        return ()
    }
})
function fibonacci(length){
    let myArr = [];
    for(let i = 0; i <= length; i++){
        myArr.push(i* (i-1));
    }
    return myArr;
}