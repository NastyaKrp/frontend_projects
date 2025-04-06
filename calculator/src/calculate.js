import {
  add,
  subtract,
  multiply,
  divide,
  percentage,
  changeSign,
} from './arithmetic.js'

const themeToggle = document.getElementById('themeToggle')

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  themeToggle.classList.toggle('dark')
})

const display = document.getElementById('display')
const buttons = document.querySelectorAll('.buttons button')

let expression = ''

const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 }
const associativity = { '+': 'left', '-': 'left', '*': 'left', '/': 'left' }

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.number || button.dataset.operator

    if (value === '=') calculateResult()
    else if (value === 'C') clearCalculator()
    else if (value === '+/-') changeNumberSign()
    else if (value === '%') calculatePercentage()
    else {
      expression += value
      display.value = expression
    }
  })
})

const calculateResult = () => {
  try {
    const rpn = infixToRPN(expression)
    const result = evaluateRPN(rpn)
    display.value = result
    expression = ''
  } catch (error) {
    display.value = `Error: ${error.message}`
    expression = ''
    console.error('Calculation error:', error)
  }
}

const infixToRPN = (infix) => {
  const outputQueue = []
  const operatorStack = []
  const tokens = tokenize(infix)

  for (const token of tokens) {
    if (!isNaN(parseFloat(token))) outputQueue.push(token)
    else if (token === '(') operatorStack.push(token)
    else if (token === ')') {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== '('
      )
        outputQueue.push(operatorStack.pop())
      operatorStack.pop()
    } else {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== '(' &&
        (precedence[operatorStack[operatorStack.length - 1]] >
          precedence[token] ||
          (precedence[operatorStack[operatorStack.length - 1]] ===
            precedence[token] &&
            associativity[token] === 'left'))
      )
        outputQueue.push(operatorStack.pop())
      operatorStack.push(token)
    }
  }

  while (operatorStack.length > 0) outputQueue.push(operatorStack.pop())

  return outputQueue
}

const tokenize = (infix) => infix.match(/(\d+(\.\d+)?|[+\-*/()])/g) || []

const evaluateRPN = (rpn) => {
  const stack = []
  for (const token of rpn) {
    if (!isNaN(parseFloat(token))) stack.push(parseFloat(token))
    else {
      const operand2 = stack.pop()
      const operand1 = stack.pop()
      let result
      switch (token) {
        case '+':
          result = add(operand1, operand2)
          break
        case '-':
          result = subtract(operand1, operand2)
          break
        case '*':
          result = multiply(operand1, operand2)
          break
        case '/':
          result = divide(operand1, operand2)
          break
        default:
          throw new Error(`Unknown operator: ${token}`)
      }
      stack.push(result)
    }
  }
  return stack[0]
}

const clearCalculator = () => {
  expression = ''
  display.value = ''
}

const changeNumberSign = () => {
  if (expression.length > 0) {
    const lastNumberMatch = expression.match(/(-?\d+(\.\d+)?)$/)
    if (lastNumberMatch) {
      const lastNumber = lastNumberMatch[0]
      const newLastNumber = changeSign(parseFloat(lastNumber)).toString()
      expression =
        expression.substring(0, expression.length - lastNumber.length) +
        newLastNumber
      display.value = expression
    }
  }
}

const calculatePercentage = () => {
  if (expression.length > 0) {
    const lastNumberMatch = expression.match(/(-?\d+(\.\d+)?)$/)
    if (lastNumberMatch) {
      const lastNumber = lastNumberMatch[0]
      const newLastNumber = percentage(parseFloat(lastNumber)).toString()
      expression =
        expression.substring(0, expression.length - lastNumber.length) +
        newLastNumber
      display.value = expression
    }
  }
}
