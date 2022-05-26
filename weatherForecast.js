function functionName(timeOutside) {
  switch (timeOutside[0]) {
    case "sunny":
      console.log("It's warm outside!");
      return;
    default:
      console.log("It's cold outside!");
      return;
  }
}
functionName(["sunny"]);
