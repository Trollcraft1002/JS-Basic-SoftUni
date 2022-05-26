function smallShop(input) {
    let product = input[0];
    let city = input[1]
    let n = input[2]
    if (city == "Sofia") {
        if(product == "coffee"){
            let coffee = 0.5
            console.log(coffee * n)
        }else if(product=="water"){
            let water = .80
            console.log(water*n)
        }else if(product=="beer"){
            let beer = 1.20
            console.log(beer*n)
        }else if (product=="sweets"){
            let sweets = 1.45
            console.log(sweets*n)
        }else if(product == "peanuts") {
            let peanuts = 1.60
            console.log(peanuts*n)
        }
    }else if(city == "Plovdiv"){
        if(product == "coffee"){
            let coffee = 0.4
            console.log(coffee * n)
        }else if(product=="water"){
            let water = 0.70
            console.log(water*n)
        }else if(product=="beer"){
            let beer = 1.15
            console.log(beer*n)
        }else if (product=="sweets"){
            let sweets = 1.30
            console.log(sweets*n)
        }else if(product == "peanuts") {
            let peanuts = 1.50
            console.log(peanuts*n)
        }
    }else if(city == 'Varna'){
        if(product == "coffee"){
            let coffee = 0.45
            console.log(coffee * n)
        }else if(product=="water"){
            let water = 0.70
            console.log(water*n)
        }else if(product=="beer"){
            let beer = 1.10
            console.log(beer*n)
        }else if (product=="sweets"){
            let sweets = 1.35
            console.log(sweets*n)
        }else if(product == "peanuts") {
            let peanuts = 1.55
            console.log(peanuts*n)
        }
    }
}
smallShop(["peanuts","Varna",10])