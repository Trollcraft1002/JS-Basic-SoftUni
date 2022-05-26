function lily(input) {
    let age = Number(input[0])
    let washingMachinePrice = Number(input[1])
    let toyPrice = Number(input[2])
    let money = 0;
    let toys = 0;
    let moneyToAdd = 10
    let daysSheGotMoney = 0
    for (let i = 1; i <= age; i++){
        if (i % 2 == 0){
            money += moneyToAdd;
            moneyToAdd += 10
            daysSheGotMoney +=1
        }else {toys +=1}
    }
    let winnedMoney = money + (toys*toyPrice) - daysSheGotMoney

    if(washingMachinePrice <= winnedMoney){
        console.log(`Yes! ${(winnedMoney-washingMachinePrice).toFixed(2)}`)
    }else{
        console.log(`No! ${(washingMachinePrice-winnedMoney).toFixed(2)}`)
    }
    
}
lily(["10",
"170.00",
"6"])