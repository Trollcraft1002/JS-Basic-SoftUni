function functionName(input) {
    let fuelType = input[0].toLowerCase()
    let fuelLitters = Number(input[1])
    switch (fuelType) {
      case "diesel":
        if (fuelLitters>=25){
            console.log(`You have enough ${fuelType}.`)
        }else{console.log(`Fill your tank with ${fuelType}!`)}
        break;
      case "gasoline":
        if (fuelLitters>=25){
            console.log(`You have enough ${fuelType}.`)
        }else{console.log(`Fill your tank with ${fuelType}!`)}
        break;
      case "gas":
        if (fuelLitters>=25){
            console.log(`You have enough ${fuelType}.`)
        }else{console.log(`Fill your tank with ${fuelType}!`)}
        break;
        default: console.log('Invalid fuel!')
        break;
    }
  }
  functionName(['GAS',10])