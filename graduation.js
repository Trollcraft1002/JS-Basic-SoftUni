function graduation(input) {
  let index = 0;
  let name = input[0];
  index++;
  let sum = 0;
  while (true) {
    var grade = Number(input[index]);
    sum += grade;
    if (index == 1) {
    } else if (index == 12) {
      break;
    }
    if (grade < 3) {
      console.log(`${name} has been excluded at ${index} grade`);
      break;
    }

    index++;
  }
  let avergeGrade = sum / 12;
  if (grade > 3) {
    console.log(`${name} graduated. Average grade: ${avergeGrade.toFixed(2)}`);
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
