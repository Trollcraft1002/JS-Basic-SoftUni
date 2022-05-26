function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishers = Number(input[2]);

  let boat = 0;
  if (season == "Spring") {
    boat = 3000;
  } else if (season == "Summer" || season == "Autumn") {
    boat = 4200;
  } else {
    boat = 2600;
  }
  if (fishers <= 6) {
    boat -= boat * 0.1;
  } else if (fishers > 6 && fishers <= 11) {
    boat -= boat * 0.15;
  } else if (fishers > 12) {
    boat -= boat * 0.25;
  }
  if (season !== "Autumn") {
    if (fishers % 2 == 0) {
      boat -= boat * 0.05;
    }
  }
  if(budget < boat ){
      let moneyleft = budget - boat
      console.log(`Not enough money! You need ${(Math.abs(moneyleft)).toFixed(2)} leva.`)
  }else{
      moneyleft = budget - boat 
      console.log(`Yes! You have ${(Math.abs(moneyleft)).toFixed(2)} leva left.`)
  }
}
fishingBoat([2000,'Winter',13])