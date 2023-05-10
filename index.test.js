const stringLength = require('./index');
const reverseString = require('./reverseString');

describe('String Testing', () => {
  test('it should be the the number of charachter when the string supplies', () => {
    // Arrange
    const str = "This is 22 Characters";
  
    // Act
    const count = stringLength(str);
  
    // Assert
    expect(count).toBe(21);
  })

  test('if the number of char in the string are more than 10 or less than 0, it should throgh error ', () => {
    // Arrange
    const str = "This is 9";
  
    // Act
    const count = stringLength(str);
  
    // Assert
    expect(count).toBe('string must be between 0 - 10');
  })

  test('if the number of char in the string are more than 10 or less than 0, it should throgh error ', () => {
    // Arrange
    const str = "Hello";
  
    // Act
    const reverse = reverseString(str);
  
    // Assert
    expect(reverse).toBe('olleH');
  })

  // capitalixed first char test
})


