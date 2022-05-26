function isExcellent(input) {
  let grade = Number(input[0]);
  switch (true) {
    case grade >= 5.5 && grade <= 6.0:
      console.log("Excellent!");
      break;
    case grade < 5.5:
      return;
      break;
    default:
      return;
      break;
  }
}
isExcellent([5.49]);
