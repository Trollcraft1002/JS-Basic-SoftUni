function convert(input) {
  let celsius = Number(input[0]);

  let result = celsius * 1.8 + 32;
  console.log(result.toFixed(2));
}
convert([25]);
