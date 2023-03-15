const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []

function calculate(button){
    const value = button.textContent
    
    calculation.push(value)

    console.log(calculation)
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))