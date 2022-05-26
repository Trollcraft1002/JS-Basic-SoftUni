function functionName(input) {

    let scumPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudPrice = scumPrice + (scumPrice * 0.60)
    let SafridPrice = cacaPrice + (cacaPrice * 0.80)
    let midiPrice = 7.50
    
    let totalPrice = (palamudKg*palamudPrice)+(safridKg*SafridPrice)+(midiKg*midiPrice)
    console.log(totalPrice.toFixed(2));
  }
  functionName([6.90,4.20,1.5,2.5,1]);