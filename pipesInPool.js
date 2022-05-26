function pipes(input) {
  let V = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let H = Number(input[3]);
  let pipesTotal = p1 * H + p2 * H;
  let poolPercetage = pipesTotal * 0.1;
  let secondPipePercentage = ((pipesTotal - p1 * H) / pipesTotal) * 100;
  let firstPipePercentage = ((pipesTotal - p2 * H) / pipesTotal) * 100;
  let test = (V - pipesTotal) * 0.1;
  let test2 = (test - 100) * -1;
  // console.log(test2.toFixed(2))
  if (pipesTotal <= V) {
    console.log(
      `The pool is ${test2.toFixed(
        2
      )}% full. Pipe 1: ${firstPipePercentage.toFixed(
        2
      )}%. Pipe 2: ${secondPipePercentage.toFixed(2)}%.`
    );
  } else {
    let overflow = pipesTotal - V;
    console.log(
      `For ${H.toFixed(2)} hours the pool overflows with ${overflow.toFixed(
        2
      )} liters.`
    );
  }
}
pipes([1000, 100, 120, 3]);
