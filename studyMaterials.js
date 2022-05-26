function calculate(input){
    Number(input[0],input[1],input[2],input[3],)
    let packetPens = 5.8
    let packetMarkers = 7.2
    let preparationPerLiter = 1.2

    let packetPensBuyed = input[0] * packetPens
    let packetMarkersBuyed = input[1] * packetMarkers
    let litterPreparationBuyed = input[2] * preparationPerLiter
    let promotionInPercentages = input[3]
    let totalPrice = (packetMarkersBuyed + packetPensBuyed + litterPreparationBuyed)
    
    let promotion = promotionInPercentages / 100
    let result = totalPrice - (totalPrice * promotion)

    console.log(result)
}
calculate([2,3,4,25])