function functionName(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);
  //walls
  let door = 1.2 * 2;
  let windows = 1.5 * 1.5;
  let rightAndLeftWalls = x * y * 2 - 2 * windows;
  let backAndFrontWalls = x * x * 2 - door;
  let allWalls = backAndFrontWalls + rightAndLeftWalls;
  let greenPaintLitters = allWalls / 3.4;
  //roof
  let doubleRoof = 2 * (x * y);
  let doubleTriangles = 2 * ((x * h / 2));
  let roof = doubleRoof + doubleTriangles;
  let redPaintLitters = roof / 4.3;
  //result

  let result = `${greenPaintLitters.toFixed(2)}\n${redPaintLitters.toFixed(2)}`;
  console.log(result);
}
functionName([10.25, 15.45, 8.8]);
