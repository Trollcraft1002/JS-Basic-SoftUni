function convert(radiants) {
  let degree = (radiants * 180) / Math.PI;
  Number(radiants, degree);
  console.log(degree);
}
convert(3.1416);
