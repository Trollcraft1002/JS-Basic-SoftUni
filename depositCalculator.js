function convert(input) {
  let depositedMoney = Number(input[0]);
  let exceededTime = Number(input[1]);
  let yearPercent = Number(input[2]);
  let interest = depositedMoney * (yearPercent/100)
  let interestForMonth = interest / 12
  let moneyTotal = depositedMoney + (interestForMonth*exceededTime)
  console.log(moneyTotal);
}
convert([3200, 5, 80]);
