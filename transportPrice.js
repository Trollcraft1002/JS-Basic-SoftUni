function functionName(input) {
  let distance = Number(input[0]);
  let dayOrNight = input[1];

  let taxiStart = 0.7;
  let taxiDay = 0.79;
  let taxiNight = 0.9;

  let bus = 0.09; //min 20km

  let train = 0.06; //min 100km

  switch (true) {
    case dayOrNight === "day":{
        if (distance < 20) {
          let price = taxiStart + taxiDay * distance;
          console.log(price.toFixed(2));
        } else if (distance < 100) {
          let price = bus * distance;
          console.log(price.toFixed(2));
        } else {
          let price = train * distance;
          console.log(price.toFixed(2))
        }
      }
      break;
    case dayOrNight === "night":{
        if (distance < 20) {
          let price = taxiStart + taxiNight * distance;
          console.log(price.toFixed(2));
        } else if (distance < 100) {
          let price = bus * distance;
          console.log(price.toFixed(2));
        } else {
          let price = train * distance;
          console.log(price.toFixed(2));
        }
      }
      break;
    default:
      console.log(404);
      break;
  }
}
functionName([180, "night"]);
