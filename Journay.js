function Journay(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let totalPrice
  if (budget>1000){
      totalPrice = budget -(budget - (budget*.9))
      console.log(`Somewhere in Europe\nHotel - ${totalPrice.toFixed(2)}`)
  }else 
  if (season == "summer") {
    if (budget <= 100 && budget <101) {
        totalPrice = budget -(budget - (budget*.3))
      console.log(`Somewhere in Bulgaria\nCamp - ${totalPrice.toFixed(2)}`)
    }else if (budget<=1000 && budget>100 ){
        totalPrice = budget -(budget - (budget*.4))
        console.log(`Somewhere in Balkans\nCamp - ${totalPrice.toFixed(2)}`)
    }
  } else if (season == "winter") {
    if (budget <= 100 && budget<101) {
        totalPrice = budget -(budget - (budget*.7))
        console.log(`Somewhere in Bulgaria\nHotel - ${totalPrice.toFixed(2)}`)
    }else if (budget<=1000 && budget>100 ){
        totalPrice = budget -(budget - (budget*.8))
        console.log(`Somewhere in Balkans\nHotel - ${totalPrice.toFixed(2)}`)
    }
    }
  }
  Journay([312,'summer'])