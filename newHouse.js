function newHome(input) {
  let flowerType = input[0];
  let flowersNum = Number(input[1]);
  let budget = Number(input[2]);

  const rose = 5;
  const dahlias = 3.8;
  const tulips = 2.8;
  const narcissus = 3;
  const gladiolus = 2.5;
  
  let totalPrice
  switch (flowerType) {
    case 'Roses':
      totalPrice = flowersNum*rose
      if (budget < totalPrice){
      let neededMoney = totalPrice-budget
      console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
      }else
        if (flowersNum > 80){
        totalPrice = (flowersNum*rose)
        totalPrice -=totalPrice*.15
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
      }else{
        totalPrice = flowersNum*rose
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
      }
      break;
      case  'Dahlias':
        totalPrice = flowersNum*dahlias
      if (budget < totalPrice){
      let neededMoney = totalPrice-budget
      console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
      }else
        if (flowersNum > 90){
        totalPrice = (flowersNum*dahlias)
        totalPrice -=totalPrice*.15
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
      }else{
        totalPrice = flowersNum*dahlias
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
      }
          break;
          case 'Tulips':
      totalPrice = flowersNum*tulips
      if (budget < totalPrice){
      let neededMoney = totalPrice-budget
      console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
      }else
        if (flowersNum > 80){
        totalPrice = (flowersNum*tulips)
        totalPrice -=totalPrice*.15
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
      }else{
        totalPrice = flowersNum*tulips
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
      }
      break;
      case 'Narcissus':
      totalPrice = flowersNum*narcissus
      if (budget < totalPrice){
      let neededMoney = totalPrice-budget
      console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
      }else
        if (flowersNum < 120){
        totalPrice = (flowersNum*narcissus)
        
        totalPrice +=totalPrice*.15
        if (totalPrice>budget){
          neededMoney = totalPrice-budget
          console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
        }else{
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
      }}else{
        totalPrice = flowersNum*narcissus
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
      }
      break;
      case 'Gladiolus':
        totalPrice = flowersNum*gladiolus
        if (budget < totalPrice){
        let neededMoney = totalPrice-budget
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
        }else
          if (flowersNum < 80){
          totalPrice = (flowersNum*gladiolus)
          
          totalPrice +=totalPrice*.20
          if (totalPrice>budget){
            neededMoney = totalPrice-budget
            console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
          }else{
          console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
        }}else{
          totalPrice = flowersNum*gladiolus
          console.log(`Hey, you have a great garden with ${flowersNum} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
        }
        break;
      
  
    default: console.log('Check name ')
      break;
  }
}
newHome(["Narcissus", 119, 360]);
//80/100