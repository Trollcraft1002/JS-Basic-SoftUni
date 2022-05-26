function functionName(input) {

    let vegetablePrice = Number(input[0]);
    let fruitsPrice = Number(input[1]);
    let vegetablePicked = Number(input[2]);
    let fruitsPicked = Number(input[3]);
    let euro = 1.94;
  
    let result = ((vegetablePicked*vegetablePrice)+(fruitsPicked*fruitsPrice))/euro;
    console.log(result.toFixed(2));
  }
  functionName([0.194,19.4,10,10]);
  