function lunchBreak(input) {

    let serialName = input[0];
    let episodeLenght = Number(input[1]);
    let breakLenght = Number(input[2]);
    
    let lunchBreak = breakLenght/8
    let timeforRest = breakLenght/4
    Math.ceil(freeTime = breakLenght-lunchBreak-timeforRest)
    if(freeTime>=episodeLenght){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(freeTime-episodeLenght)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil((freeTime-episodeLenght)*-1)} more minutes.`)
    }
  }
lunchBreak(['Anime', 24, 600])