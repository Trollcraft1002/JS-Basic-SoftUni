function functionName(input) {
  switch (true) {
    case input[0] >= 26 && input[0] <= 35:
      console.log("Hot");
      break;
    case input[0] >= 20.1 && input[0] <= 25.9:
      console.log("Warm");
      break;
    case input[0] >= 15.0 && input[0] <= 20.0:
      console.log("Mild");
      break;
    case input[0] >= 12.0 && input[0] <= 14.9:
      console.log("Cool");
      break;
    case input[0] >= 5.0 && input[0] <= 11.9:
      console.log("Cold");
      break;
    default:
      console.log("unknown");
      break;
  }
}
functionName([16.5]);
