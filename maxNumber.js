function maxNumber(input) {
  let index = 0;
  let number, maxNumber, prevNumber;
  number = input[0];
  while (true) {
    if (input[index] == "Stop") {
      break;
    }
    prevNumber = Number(input[index]);
    if (number < prevNumber) {
      number = prevNumber;
    }
    index++;
  }
  console.log(number)
}
maxNumber(["-10", "20", "-30", "Stop"]);
