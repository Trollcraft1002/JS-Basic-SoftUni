function calculate(input) {
  let budget = Number(input[0]);
  let statists = Number(input[1]);
  let statisClothingPrice = Number(input[2]);
  let decor = budget * 0.1;
  let statisClothingTotal = statists * statisClothingPrice;
  if (statists >= 150) {
    let statisClothingPromotion = statisClothingPrice * statists * 0.1;
    let clothingWithPromotionPrice = statisClothingTotal-statisClothingPromotion
    if (budget >= clothingWithPromotionPrice + decor) {
      let moneyLeft = budget - (clothingWithPromotionPrice + decor);
      console.log(`Action!\nWingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < clothingWithPromotionPrice + decor) {
      let neededMoney = (budget - (clothingWithPromotionPrice + decor)) * -1;
      console.log(`Not enough money!\nWingard needs ${neededMoney.toFixed(2)} leva more.`);
    }
  } else if (budget >= statisClothingTotal + decor) {
    let moneyLeft = budget - (statisClothingTotal + decor);
    console.log(`Action!\nWingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let neededMoney = (budget - (statisClothingTotal + decor)) * -1;
    console.log(`Not enough money!\nWingard needs ${neededMoney.toFixed(2)} leva more.`);
  }
}
calculate([9587.88, 222, 55.68]);
