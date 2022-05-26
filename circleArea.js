function circleArea(input) {
  let r = Number(input[0]);
  let circleArea = Math.PI * (r * r);
  let perimeter = 2 * Math.PI * r;

  let result = `${circleArea.toFixed(2)}\n${perimeter.toFixed(2)}`;
  console.log(result);
}
circleArea([3]);
