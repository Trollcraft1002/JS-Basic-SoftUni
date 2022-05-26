function clothing(input){
    let shirtPrice = Number(input[0])
    let moneyNeededForBall = Number(input[1])

    let shortsPrice = shirtPrice *0.75
    let socksPrice = shortsPrice * .20
    let shoeshPrice = (shirtPrice + shortsPrice)*2
    let totalPrice = shirtPrice + socksPrice + shoeshPrice+shortsPrice
    let promoPrice = totalPrice- (totalPrice * .15)
    if(promoPrice>=moneyNeededForBall){
        console.log(`Yes, he will earn the world-cup replica ball!\nHis sum is ${(promoPrice).toFixed(2)} lv.`)
    }else{
        console.log(`No, he will not earn the world-cup replica ball.\nHe needs ${(moneyNeededForBall - promoPrice).toFixed(2)} lv. more.`)
    }
}
clothing(["55",
"310"])