let currentNum = 0
let storedNum = 'banana'
let displayNum = ''
let currentAlg = ''
const numPad = [document.querySelector("#num0"),document.querySelector("#num1"),document.querySelector("#num2"),document.querySelector("#num3"),document.querySelector("#num4"),document.querySelector("#num5"),document.querySelector("#num6"),document.querySelector("#num7"),document.querySelector("#num8"), document.querySelector("#num9"), document.querySelector("#decimal")]
window.onload = init();

// init function for giving basic button responses
function init(){
    document.querySelector("#add").addEventListener("click", operator);

    document.querySelector("#subtract").addEventListener("click", operator)

    document.querySelector("#multiply").addEventListener("click", operator)

    document.querySelector("#divide").addEventListener("click", operator)
    
    document.querySelector("#clear").addEventListener("click", clear)

    document.querySelector("#calculate").addEventListener("click", enter)

    numPad.forEach((i)=> i.addEventListener('click', numKey))
}

function operator(event){
    event.preventDefault()
    let alg = event.target.textContent
    let result = document.querySelector(".calculatorDisplay")
    switch(alg){
        case '+':
            currentAlg = '+'
            enter()
            displayNum = ''
        break;

        case '-':
            currentAlg = '-'
            enter()
            displayNum = ''
        break;

        case '×':
            currentAlg = '*'
            enter()
            displayNum = ''
        break;

        case '÷':
            currentAlg = '÷'
            enter()
            displayNum = ''
        break;
    }
}

function numKey(event){
    event.preventDefault()
    displayNum += event.target.textContent
    document.querySelector(".calculatorDisplay").textContent = displayNum
}

function clear(){

}

function enter(){
    const result = document.querySelector(".calculatorDisplay")
    let symbol = currentAlg
    switch(symbol){
        case '+': 
            storedNum += parseFloat(displayNum)
            result.textContent = storedNum
            displayNum = storedNum
        break;

        case '-':
            if(storedNum === 'banana'){
                storedNum = parseFloat(displayNum)
            }else{
                storedNum -= parseFloat(displayNum)
                result.textContent = storedNum
                displayNum = storedNum
            }
        break;

        case '*':
            if(storedNum === 'banana'){
                storedNum = parseFloat(displayNum)
            }else{
                storedNum *= parseFloat(displayNum)
                result.textContent = storedNum
                displayNum = storedNum
            }
        break;

        case '÷':
            if(storedNum === 'banana'){
                storedNum = parseFloat(displayNum)
            }else{
                storedNum /= parseFloat(displayNum)
                result.textContent = storedNum
                displayNum = storedNum
            }
        break;
    }
}