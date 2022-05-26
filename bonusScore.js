function functionName(input) {
  let score = Number(input[0]);
  let bonusPoint = 0.0;

  if (score <= 100) {
    bonusPoint = 5;
  } else if (score > 100 && score < 1000) {
    bonusPoint += score * 0.2;
  } else {
    bonusPoint += score * 0.1;
  }
  let bonusBonuses = 0.0;
  if (score % 2 == 0) {
    bonusBonuses += 1;
  }
  if (score % 10 == 5) {
    bonusBonuses += 2;
  }
  console.log(bonusBonuses + bonusPoint);
  console.log(score + bonusPoint + bonusBonuses);
}
functionName([175]);
