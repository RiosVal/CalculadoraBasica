const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []

function calculate(button){
    const value = button.textContent
    if (value === "CLEAR"){
        calculation = []
        screenDisplay.textContent = '.'
    }
    else if (value === "="){
        screenDisplay.textContent = eval(accumulativeCalculation)
    }
    else{
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))