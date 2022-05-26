function cinema(input){
    let premiere = 12.00
    let normal = 7.50
    let discount = 5.00
    
    let choose = input[0]
    let r = Number(input[1])
    let c = Number(input[2])
    let income = 0.0
    if(choose == "Premiere"){
        income = r * c * premiere
    }else if (choose ==  "Normal"){
        income=r*c*normal
    }else if(choose=="Discount"){
        income=r*c*discount
    }
    console.log(`${income.toFixed(2)} leva`)

}