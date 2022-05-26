function accountBalance(input) {
  let index = 0;
  let totalbalance = 0;
  let total = 0;
  while (true) {
    if (input[index] < 0) {
      console.log("Invalid operation!");
      console.log(`Total: ${Number(totalbalance).toFixed(2)}`);
      break;
    } else if (input[index] == "NoMoreMoney") {
      console.log(`Total: ${Number(totalbalance).toFixed(2)}`);
      break;
    } else if (index == NaN) {
      break;
    }
    console.log(`Increase: ${Number(input[index]).toFixed(2)}`);
    totalbalance += Number(input[index]);
    index++;
    Number(totalbalance)
   
    
  }
}
accountBalance(["5.51", "69.42", "100", 'NoMoreMoney']);
