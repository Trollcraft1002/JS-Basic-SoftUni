function check(input) {
  let thingy = input[0];
  switch (thingy) {
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    default:
      console.log("unknown");
      break;
  }
}
check(["tomawaterto"]);
