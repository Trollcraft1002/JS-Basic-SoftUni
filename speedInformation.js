function internetSpeed(input) {
  let a = Number(input[0]);
  switch (true) {
    case a <= 10:
      console.log("slow");
      break;
    case a > 10 && a <= 50:
      console.log("average");
      break;
    case a > 50 && a <= 150:
      console.log("fast");
      break;
    case a > 150 && a <= 1000:
      console.log("ultra fast");
      break;
    default:
      console.log("extremely fast");
      break;
  }
}
internetSpeed([3000]);
