function Shop(input) {
  let fruit = input[0];
  let day = input[1];
  let num = Number(input[2]);
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      let banana = 2.5;
      let apple = 1.2;
      let orange = 0.85;
      let grapefruit = 1.45;
      let kiwi = 2.7;
      let pineapple = 5.5;
      let grapes = 3.85;
      switch (fruit) {
        case "banana":
          console.log((banana * num).toFixed(2));
          break;
        case "apple":
          console.log((apple * num).toFixed(2));
          break;
        case "orange":
          console.log((orange * num).toFixed(2));
          break;
        case "grapefruit":
          console.log((grapefruit * num).toFixed(2));
          break;
        case "kiwi":
          console.log((kiwi * num).toFixed(2));
          break;
        case "pineapple":
          console.log((pineapple * num).toFixed(2));
          break;
        case "grapes":
          console.log((grapes * num).toFixed(2));
          break;
          default:console.log('error')
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      let banana1 = 2.7;
      let apple1 = 1.25;
      let orange1 = 0.9;
      let grapefruit1 = 1.6;
      let kiwi1 = 3;
      let pineapple1 = 5.6;
      let grapes1 = 4.2;

      switch (fruit) {
        case "banana":
            console.log((banana1*num).toFixed(2))
          break;
        case "apple":
            console.log((apple1*num).toFixed(2))
          break;
        case "orange":
            console.log((orange1*num).toFixed(2))
          break;
        case "grapefruit":
        console.log((grapefruit1*num).toFixed(2))
          break;
        case "kiwi":
            console.log((kiwi1*num).toFixed(2))
          break;
        case "pineapple":
            console.log((pineapple1*num).toFixed(2))
          break;
        case "grapes":
            console.log((grapes1*num).toFixed(2))
          break;
      }break;
      default: console.log('error')
  }
  
}

Shop(["grapes","Saturday",0.5])