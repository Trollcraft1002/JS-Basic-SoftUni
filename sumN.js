function num(input) {
  let numGiven = Number(input[0]);
  let index = 1;
  let sum = 0;

  while (true) {
    let num1 = Number(input[index]);
    if (isNaN(num1)) {
      console.log(sum);
      break;
    }
    sum += num1;
    index++;
    if (numGiven <= num) {
      console.log(sum);
    }
  }
}
num(["20", "1", "2", "3", "4", "5", "6"]);

//TO DO
