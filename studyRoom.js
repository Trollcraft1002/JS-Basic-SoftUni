function functionName(input) {

    let w = Number(input[0])*100;
    let h = Number(input[1]*100) - 100;
    let deskPerRow = parseInt(h/70)
    let rows = parseInt(w/120)

    let result = deskPerRow*rows-3;
    console.log(result/*.toFixed(2)*/);
    
  }
  functionName([15,8.9]);
  