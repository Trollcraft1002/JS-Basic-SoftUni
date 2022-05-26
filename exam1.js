function catFood(input){
    let magnezee = 9
    let protein = 4
    let vuglehidrati = 4

    let percentageMagn = Number(input[0]*0.01)
    let percentageProt = Number(input[1]*0.01)
    let percentageVug = Number(input[2]*0.01)
    let totalCalo = Number(input[3])
    let percentageWater = Number(input[4])

    let totalmagneeze = ((totalCalo * percentageMagn)/magnezee)
    let totalProt = ((totalCalo * percentageProt)/protein)
    let totalVug = ((totalCalo *percentageVug)/vuglehidrati)

    let foodWeight = (totalmagneeze + totalProt + totalVug).toFixed(4)
    let calloriesPerKilo = (totalCalo / foodWeight).toFixed(4)
    let test1 = (100-percentageWater)*0.01
    let test = (calloriesPerKilo * test1).toFixed(4)
    console.log(test)

}
catFood(["20",
"60",
"20",
"1800",
"50"])