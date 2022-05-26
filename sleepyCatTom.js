function functionName(input) {
    let weekendDays = Number(input[0]);
    let workingDays = 365 -weekendDays
    let playTime = (workingDays*63)+(weekendDays*127)
    let norm = 30000-playTime

    
    if(norm>30000){
    let something = (30000-norm)
    let hours = something/60
    let rhours = Math.floor(hours)
    let minutes =(hours -rhours)*60
    let rminutes=Math.round(minutes)
    console.log(`${rhours}:${rminutes}`)
        console.log(`Tom will run away\n${rhours} hours and ${rminutes} minutes more for play`)
    }else{
        //norm*=-1
    let hours = norm/60
    if (hours <=0){
        hours*=-1
    let rhours = Math.floor(hours)
    let minutes =(hours -rhours)*60
    let rminutes=Math.round(minutes)
        console.log(`Tom will run away\n${rhours} hours and ${rminutes} minutes more for play`)
    }
    else{
        let rhours = Math.floor(hours)
    let minutes =(hours -rhours)*60
    let rminutes=Math.round(minutes)
        console.log(`Tom sleeps well\n${rhours} hours and ${rminutes} minutes less for play`)
    }
    }
  }
  functionName([113]);   