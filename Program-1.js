// Calculator which performs operations such as Addition, Subtraction, Multiplication, and Division using class.

class Calculator {
    constructor(a, b, operation) {
      this.a = a;
      this.b = b;
      this.operation = operation;
    }
  
    calculate() {
      switch (this.operation.toLowerCase()) {
        case 'addition':
          return this.a + this.b;
        case 'subtraction':
          return this.a - this.b;
        case 'multiplication':
          return this.a * this.b;
        case 'division':
          if (this.b === 0) {
            return 'Error: Division by zero is not allowed.';
          }
          return this.a / this.b;
        default:
          return 'Error: Invalid operation. Please choose addition, subtraction, multiplication, or division.';
      }
    }
  }
  

  const a = parseFloat(prompt('Enter the first number (a):'));
  const b = parseFloat(prompt('Enter the second number (b):'));
  const operation = prompt('Enter the type of operation (addition, subtraction, multiplication, division):');
  
  const calculator = new Calculator(a, b, operation);
  const result = calculator.calculate();
  
  console.log(`Result: ${result}`);
  