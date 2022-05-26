function oscars(input) {
  index=0
  let actorName  =  input[index]
  index++
  let academyPoints = Number(input[index])
  index++
  let voteNum = Number(input[index])
  index++
  let isNominee = false
  for (let i = 0; i<voteNum; i++) {
  let  name = input[index]
  index++
  let  tempPoints = Number(input[index])
  index++

 academyPoints += (tempPoints * name.length)/2

    if  (academyPoints > 1250.5){
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
      isNominee = true
      break;
    }
  }
  if(!isNominee){
  let diff = Math.abs(academyPoints-1250.5)
  console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`)
  } 
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])