function circleAreaAndPerimeter(r) {
    Number(r)
    const perimeter = (2 * Math.PI * r).toFixed(2);
    const square = (Math.PI * (r*r)).toFixed(2);
    console.log(`${square}\n${perimeter}`);
}
  circleAreaAndPerimeter(3)