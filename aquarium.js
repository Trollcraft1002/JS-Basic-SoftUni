function aquarium(input){
    let length,width,height,percent
    length = Number(input[0])
    width = Number(input[1])
    height = Number(input[2])
    percent = Number(input[3])
    let space = length * width * height 
    let convertedToLitters = space * 0.001
    let neededLitters = convertedToLitters *(1-(percent/100))
    let result = neededLitters
    console.log(result)
}
aquarium([105,77,89,18.5])