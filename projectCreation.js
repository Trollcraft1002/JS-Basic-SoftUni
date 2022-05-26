function projects(input){
    let neededHours = input[1] * 3
    Number(neededHours, input[1])
    console.log(`The architect ${input[0]} will need ${neededHours} hours to complete ${input[1]} project/s`)
}   
projects(["George", 4])