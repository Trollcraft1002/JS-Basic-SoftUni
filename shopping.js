function functionName(input) {
  let budget = Number(input[0]);
  let gpusBuyed = Number(input[1]);
  let cpuBuyed = Number(input[2]);
  let ramsBuyed = Number(input[3]);

  let GPU = 250;
  let CPU = GPU * gpusBuyed * 0.35;
  let RAM = GPU * gpusBuyed * 0.1;

  let totalPrice = GPU * gpusBuyed + CPU * cpuBuyed + RAM * ramsBuyed;
  if (gpusBuyed > cpuBuyed) {
    totalPrice -= totalPrice * 0.15;
  }
  if (budget >= totalPrice) {
    console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${((budget - totalPrice) * -1).toFixed(
        2
      )} leva more!`
    );
  }
}
functionName([920.45, 3, 1, 1]);
