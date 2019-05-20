let currentNum = 0
let displayNum = ''

window.onload = init();

// init function for giving basic button responses
function init(){
    document.querySelector("#add").addEventListener("click", operator);

    document.querySelector("#subtract").addEventListener("click", operator)

    document.querySelector("#multiply").addEventListener("click", operator)

    document.querySelector("#divide").addEventListener("click", operator)

    document.querySelector("#decimal").addEventListener("click", numKey)
    
    document.querySelector("#clear").addEventListener("click", clear)

    document.querySelector("#calculate").addEventListener("click", enter)

    document.querySelector(".num-button").addEventListener("click", numKey)
}

function operator(){
    switch(stuff){
        case '+':
        break;

        case '-':
        break;

        case '&times;':
        break;

        case '÷':
        break;
    }
}

function numKey(event){
    event.preventDefault()
    console.log(event.target.textContent)
    displayNum += event.target.textContent
    document.querySelector(".calculatorDisplay").textContent = displayNum
}

function clear(){

}

function enter(){

}