function bestPlayer(input){
  
    let playerName
    let goals = 0
    let bestPlayer
    let index = 0
    let mostGoals = 0

    while (playerName !== "END"){
        playerName = input[index]
        index++
        goals = Number(input[index])
        index++
        
        
        if(goals > mostGoals){
            mostGoals = goals
            bestPlayer = playerName
        }
        if (goals >=10){
            break;
        }
    }
    console.log(`${bestPlayer} is the best player!`)
    if(mostGoals >= 3 ){
    console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`)
    }else {console.log(`He has scored ${mostGoals} goals.`)}

}
bestPlayer(["Petrov",
"1",
"Drogba",
"2"])