function area(input) {
  let figure = input[0];
  let figureInput = Number(input[1]);
  let figureInput2 = Number(input[2]);
  switch (true) {
    case figure == "square":
      console.log((figureInput * figureInput).toFixed(3));
      break;
    case figure == "rectangle":
      console.log((figureInput * figureInput2).toFixed(3));
      break;
    case figure == "circle":
      console.log((Math.PI * (figureInput * figureInput)).toFixed(3));
      break;
    case figure == "triangle":
      console.log(((1 / 2) * figureInput * figureInput2).toFixed(3));
      break;
  }
}
area(['circle', 5])
