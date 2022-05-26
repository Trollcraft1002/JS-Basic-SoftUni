function Shop(input) {
    let mangnoliNum = Number(input[0]);
    let zumbilNum = Number(input[1]);
    let rosesNum = Number(input[2]);
    let cactusesNum = Number(input[3]);
    let giftPrice = Number(input[4]);

    let mangoliPrice = 3.25
    let zumbilPrice = 4
    let rosesPrice = 3.5
    let cactusesPrice = 8
    
    let mangnoli = mangnoliNum*mangoliPrice
    let zumbil = zumbilPrice*zumbilNum
    let roses = rosesPrice*rosesNum
    let cactuses = cactusesNum*cactusesPrice
    let totalPrice = mangnoli+zumbil+roses+cactuses
    let totalPriceWithTax =  totalPrice-(totalPrice*.05)
    

    if(giftPrice > totalPriceWithTax){
        let result = giftPrice-totalPriceWithTax
        console.log(`She will have to borrow ${Math.ceil(result)} leva.`)
    }else if (giftPrice<=totalPriceWithTax){
        console.log(`She is left with ${Math.floor(totalPriceWithTax-giftPrice)} leva.`)
    }
  }
Shop([15,7,5,10,100])