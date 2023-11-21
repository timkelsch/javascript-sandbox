function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2
      break
    case '-':
      return num1 - num2
      break
    case '*':
      return num1 * num2
      break
    case '/':
      return num1 / num2
      break
    default:
      console.log('Error');
  }
}

x = calculator(5,2,'+')
x = calculator(5,2,'-')
x = calculator(5,2,'*')
x = calculator(5,2,'/')
x = calculator(5,2,'&')
console.log(x);










// function calculator(num1, num2, operator) {
//   let result;

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       result = 'Invalid Operator';
//   }

//   console.log(result);
//   return result;
// }

// calculator(5, 2, '&');
