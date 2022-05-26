function hotel(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let studio,apt,totalApt,totalStu
  switch (month) {
    case "May":
    case "October":
        studio = 50
        apt = 65
        if(nights>7 && nights <14){totalStu = (studio*nights) - ((studio*nights)*.05);}else if 
        (nights>14) {totalStu = (studio*nights) - ((studio*nights)*.30);}
        if (nights >14){totalApt = (apt*nights) - ((apt*nights)*.10);}
        if (nights<=7){totalStu = studio*nights;}
        if (totalApt ==undefined){totalApt = apt*nights}
        console.log(`Apartment: ${totalApt.toFixed(2)} lv.\nStudio: ${totalStu.toFixed(2)} lv.`)
        break;
    case "June":
    case "September":
        studio = 75.20
        apt = 68.70
        if (nights >14){totalApt = (apt*nights) - ((apt*nights)*.10);}
       if (nights>14) {totalStu = (studio*nights) - ((studio*nights)*.20);}else 
       {totalApt = apt * nights;totalStu=studio*nights}
       console.log(`Apartment: ${totalApt.toFixed(2)} lv.\nStudio: ${totalStu.toFixed(2)} lv.`)
      break;
    case "July":
    case "August":
        studio = 76
        apt = 77
        if (nights >14){totalApt = (apt*nights) - ((apt*nights)*.10); totalStu = studio*nights;}else 
        {totalApt = apt * nights;totalStu=studio*nights}
        console.log(`Apartment: ${totalApt.toFixed(2)} lv.\nStudio: ${totalStu.toFixed(2)} lv.`)
      break;
    
  }
}
hotel(['May', 15])
