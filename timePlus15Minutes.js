function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
  minutes += 15;
  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }
  if (hours >= 24) {
    hours -= 24;
  }
  hours.toFixed(2);
  minutes.toFixed(2);
  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}
time([0, 01]);
