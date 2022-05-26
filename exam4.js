function calculate(input){
    let days = Number(input[0])
    let index = 1
   let littersInput = 0
    let litters = 0
    let degrees = 0
    for (let i = 1; i <= days; i++){
    litters += Number(input[index])
    littersInput = Number(input[index])
    index++
    degreesInput = Number(littersInput * Number(input[index]))
    degrees += degreesInput
    index++
    litters.toFixed(3)
    degrees.toFixed(3)
    }
   console.log(`Liter: ${litters.toFixed(2)}`)
   console.log(`Degrees: ${(degrees/litters).toFixed(2)}`)
   if((degrees/litters) < 38){
       console.log('Not good, you should baking!')
   }else if((degrees/litters)>=38 && (degrees/litters) <42){
       console.log('Super!')
   }else if ((degrees/litters)>42){
       console.log('Dilution with distilled water!')
   }
}
calculate(["2",
"200",
"43",
"200",
"40"])
