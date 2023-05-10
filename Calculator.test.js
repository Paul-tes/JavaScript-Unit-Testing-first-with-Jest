const Calculator = require('./Calculator');


describe('Test Calculator', () => {
  // add test
  test('Calculator add should add two numbers', () => {
      // Arrange
      const a = 2;
      const b = 10;
      const calc = new Calculator();
  
      // Act
      const sum = calc.add(a, b);
    
      // Assert
      expect(sum).toBe(12);
  })

  test('Calculator add should add two numbers', () => {
    // Arrange
    const a = 22;
    const b = 10;
    const calc = new Calculator();

    // Act
    const sum = calc.add(a, b);
  
    // Assert
    expect(sum).toBe(32);
  })

  test('Calculator add should add two numbers', () => {
    // Arrange
    const a = 100;
    const b = 10;
    const calc = new Calculator();

    // Act
    const sum = calc.add(a, b);
  
    // Assert
    expect(sum).toBe(110);
  })


  // subtruct test
  test('Calculator add should add two numbers', () => {
    // Arrange
    const a = 12;
    const b = 10;
    const calc = new Calculator();

    // Act
    const dif = calc.sub(a, b);
  
    // Assert
    expect(dif).toBe(2);
  })

  test('Calculator add should add two numbers', () => {
    // Arrange
    const a = 222;
    const b = 10;
    const calc = new Calculator();

    // Act
    const dif = calc.sub(a, b);

    // Assert
    expect(dif).toBe(212);
  })

  test('Calculator add should add two numbers', () => {
    // Arrange
    const a = 100;
    const b = 10;
    const calc = new Calculator();

    // Act
    const dif = calc.sub(a, b);

    // Assert
    expect(dif).toBe(90);
  })

  // multiplication test
  test('Calculator add should add two numbers', () => {
    // Arrange
    const a = 12;
    const b = 10;
    const calc = new Calculator();

    // Act
    const mul = calc.mul(a, b);
  
    // Assert
    expect(mul).toBe(120);
  })

  test('Calculator add should add two numbers', () => {
    // Arrange
    const a = 222;
    const b = 10;
    const calc = new Calculator();

    // Act
    const mul = calc.mul(a, b);

    // Assert
    expect(mul).toBe(2220);
  })

  test('Calculator add should add two numbers', () => {
    // Arrange
    const a = 100;
    const b = 10;
    const calc = new Calculator();

    // Act
    const mul = calc.mul(a, b);

    // Assert
    expect(mul).toBe(1000);
  })
})