function Animal(input) {
    let inputParam = input[0]
    switch (inputParam) {
      case "dog":
        console.log("mammal");
        break;
      case "crocodile":
      case "snake":
      case "tortoise":
        console.log("reptile");
        break;
      default:
        console.log("unknown");
        break;
    }
}
Animal(["crocodile"])