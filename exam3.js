function calculate(input){
    let peopleNum = Number(input[0])
    let season = input[1]
    let price = 0
    if(peopleNum <=5){
        switch (season) {
            case 'spring': 
             price = peopleNum * 50
            console.log(`${price.toFixed(2)} leva.`)
                break;
        case 'summer':
            price = (peopleNum * 48.50)-((peopleNum*48.50)*.15)
            console.log(`${price.toFixed(2)} leva.`)
            break;
            case 'autumn':
                 price = (peopleNum * 60)
                console.log(`${price.toFixed(2)} leva.`)
                break;
            case 'winter':
                 price = (peopleNum * 86)+((peopleNum*86)*0.08)
                console.log(`${price.toFixed(2)} leva.`)
                break;
            default:
                break;
        }
    }else{
        switch (season) {
            case 'spring': 
             price = peopleNum * 48
            console.log(`${price.toFixed(2)} leva.`)
                break;
        case 'summer':
             price = (peopleNum * 45)-((peopleNum*45)*.15)
            console.log(`${price.toFixed(2)} leva.`)
            break;
            case 'autumn':
                 price = (peopleNum * 49.50)
                console.log(`${price.toFixed(2)} leva.`)
                break;
            case 'winter':
                 price = (peopleNum * 85)+((peopleNum*85)*0.08)
                console.log(`${price.toFixed(2)} leva.`)
                break;
        }
    }
}
calculate(["1",
"autumn"])