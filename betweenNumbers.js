function check(input) {
  let a = Number(input[0]);
  switch (true) {
    case a < 100:
      console.log("Less than 100");
      break;
    case a >= 100 && a <= 200:
      console.log("Between 100 and 200");
      break;
    case a > 200:
      console.log("Greater than 200");
  }
}
check([400]);
