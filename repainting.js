function repaint(input) {
  let nylonPerMetter = 1.5;
  let paintPerLitter = 14.5;
  let paintDiluentPerLitter = 5;

  let neededNylon = (Number(input[0]) + 2) * nylonPerMetter;
  let neededPaint =(Number(input[1]) + input[1] * 0.1) * paintPerLitter;
  let neededPaintDiluent = Number(input[2]) * paintDiluentPerLitter;
  let hours = Number(input[3]);
  let taxes = 0.4;

  let totalPrice = neededNylon + neededPaint + neededPaintDiluent + taxes;
  let workerPayout = totalPrice * 0.3 * hours;

  let result = totalPrice + workerPayout;
  console.log(result);
}
repaint([10, 11, 4, 8]);
