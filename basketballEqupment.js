function basketball(input){
    let taxForYear = Number(input[0])
    let basketballShoes, basketballCloth, basketballBall, basketballAccessories 
    basketballShoes = taxForYear - (taxForYear * 0.40)
    basketballCloth = basketballShoes - (basketballShoes * 0.20)
    basketballBall = basketballCloth * 0.25
    basketballAccessories = basketballBall * 0.20
    let result = basketballBall + basketballCloth + basketballShoes + basketballAccessories + taxForYear
    console.log(result)
}
basketball([365])