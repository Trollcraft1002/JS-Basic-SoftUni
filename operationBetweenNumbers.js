function operation(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let op = input[2];
  let result;
  function isOdd(num) {
    let param = parseInt(num[0]);
    if (param % 2 == 0) {
      return (isEven = "even");
    } else {
      return (isEven = "odd");
    }
  }
  switch (op) {
    case "+":
        result = n1+n2
        console.log(`${n1} ${op} ${n2} = ${result} - ${isOdd([result])}`)
      break;
    case "-":
        result = n1-n2
        console.log(`${n1} ${op} ${n2} = ${result} - ${isOdd([result])}`)
      break;
    case "*":
        result = n1*n2
        console.log(`${n1} ${op} ${n2} = ${result} - ${isOdd([result])}`)
      break;
    case "/":
        result = n1/n2
        if (n2==0){console.log(`Cannot divide ${n1} by zero`)}else{
        console.log(`${n1} ${op} ${n2} = ${result.toFixed(2)}`)}
      break;
    case "%":
        result = n1%n2
        if (n2==0){console.log(`Cannot divide ${n1} by zero`)}else{
        console.log(`${n1} ${op} ${n2} = ${result}`)}
      break;
  }
}

operation([10, 0, "%"]);
