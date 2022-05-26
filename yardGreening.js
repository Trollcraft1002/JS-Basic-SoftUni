function yardGreening(sqareMeters){
    Number(sqareMeters)
   let priceTotal =  sqareMeters * 7.61
   let promotion = priceTotal * 0.18
   let promotionalPrice = priceTotal - promotion
   console.log(`The final price is: ${promotionalPrice} lv.\nThe discount is: ${promotion} lv.`)
}
yardGreening(550)