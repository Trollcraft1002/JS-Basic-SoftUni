function tradeCommissions(input) {
    const town = input[0];
    const sales = Number(input[1]);
    let price = 0;
   
    if (sales >= 0 && sales <= 500) {
      switch (town) {
        case "Sofia":
          price = sales * 0.05;
          break;
        case "Varna":
          price = sales * 0.045;
          break;
        case "Plovdiv":
          price = sales * 0.055;
          break;
        default:
          price = "error";
          break;
      }
    } else if (sales >= 500 && sales <= 1000) {
      switch (town) {
        case "Sofia":
          price = sales * 0.07;
          break;
        case "Varna":
          price = sales * 0.075;
          break;
        case "Plovdiv":
          price = sales * 0.08;
          break;
        default:
          price = "error";
          break;
      }
    } else if (sales >= 1000 && sales <= 10000) {
      switch (town) {
        case "Sofia":
          price = sales * 0.08;
          break;
        case "Varna":
          price = sales * 0.1;
          break;
        case "Plovdiv":
          price = sales * 0.12;
          break;
        default:
          price = "error";
          break;
      }
    } else if (sales > 10000) {
      switch (town) {
        case "Sofia":
          price = sales * 0.12;
          break;
        case "Varna":
          price = sales * 0.13;
          break;
        case "Plovdiv":
          price = sales * 0.145;
          break;
        default:
          price = "error";
          break;
      }
    }
   
    if (price > 0) {
      console.log(price.toFixed(2));
    } else {
      console.log("error");
    }
  }