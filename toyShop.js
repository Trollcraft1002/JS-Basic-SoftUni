function toyShop(input) {
  let vacationPrice = Number(input[0]);
  let puzzlesBuyed = Number(input[1]);
  let talkingToysBuyed = Number(input[2]);
  let teddyBearsBuyed = Number(input[3]);
  let minionsBuyed = Number(input[4]);
  let trucksBuyed = Number(input[5]);

  let puzzlePrice = 2.6;
  let talkingToyPrice = 3;
  let teddyBearPrice = 4.1;
  let minionPrice = 8.2;
  let truckPrice = 2;

  let toysBuyedTotal =
    puzzlesBuyed +
    talkingToysBuyed +
    teddyBearsBuyed +
    minionsBuyed +
    trucksBuyed;

  let totalPrice =
    puzzlesBuyed * puzzlePrice +
    talkingToysBuyed * talkingToyPrice +
    minionsBuyed * minionPrice +
    trucksBuyed * truckPrice +
    teddyBearsBuyed * teddyBearPrice;
  let promotion = 0;
  if (toysBuyedTotal >= 50) {
    promotion = totalPrice * 0.25;
  }
  let totalPriceWithPromotion = totalPrice - promotion;
  let tax = totalPriceWithPromotion * 0.1;
  let winnedMoney = totalPriceWithPromotion - tax;
  if (winnedMoney >= vacationPrice) {
    console.log(`Yes! ${(winnedMoney - vacationPrice).toFixed(2)} lv left.`);
  } else {
    let neededMoney = ((winnedMoney - vacationPrice) * -1).toFixed(2);
    console.log(`Not enough money! ${neededMoney} lv needed.`);
  }
}
toyShop([320, 8, 2, 5, 5, 1]);