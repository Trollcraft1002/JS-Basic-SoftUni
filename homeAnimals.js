function food(input) {
    let days = Number(input[0])
    let leftOverFood = Number(input[1])
    let foodPerDayDog = Number(input[2]*days)
    let foodPerDayCat = Number(input[3]*days)
    let foodPerDaySlow = Number((input[4]/1000)*days)

    let totalFoodNeeded = foodPerDayCat+foodPerDayDog+foodPerDaySlow;
    if(totalFoodNeeded<=leftOverFood){   
        let foodLeft = (leftOverFood-totalFoodNeeded)
        console.log(`${Math.floor(foodLeft)} kilos of food left.`)
    }else if(totalFoodNeeded>leftOverFood){
        console.log(`${Math.ceil(totalFoodNeeded-leftOverFood)} more kilos of food are needed.`)
    }
  } 
  food([5,10,2.1,0.8,321])