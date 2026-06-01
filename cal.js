const numberButtons = document.querySelectorAll('[data-number]')

const previousOperandTextElement =
  document.querySelector('[data-previous-operand]')

const currentOperandTextElement =
  document.querySelector('[data-current-operand]')

const calculator = {
  currentOperand: '',

  appendNumber(number) {
    if (
      number === '.' &&
      this.currentOperand.includes('.')
    ) return

    this.currentOperand =
      this.currentOperand.toString() +
      number.toString()
  },

  updateDisplay() {
    currentOperandTextElement.innerText =
      this.currentOperand
  }
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})