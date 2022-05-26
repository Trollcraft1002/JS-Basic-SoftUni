function functionName(input) {
    let X = Number(input[0]);
    let Y    = Number(input[1]);
    let Z = Number(input[2]);
    let workers = Number(input[3]);

    let total = X  * Y 
    let wine = (total*.4)/2.5
      let needed = Math.abs(wine-Z)
    let wineForWorkers = Math.ceil(needed / workers);
  
    if(wine<Z){
    console.log(`It will be a tough winter! More ${Math.ceil(needed.toFixed(0))} liters wine needed.`)
    }else{
    console.log(`Good harvest this year! Total wine: ${Math.floor(wine.toFixed(0))} liters.\n${Math.ceil(needed.toFixed(0))} liters left -> ${Math.ceil(wineForWorkers.toFixed(0))} liters per person.`)
    }

  }
  functionName([650,2,175,3]);
  