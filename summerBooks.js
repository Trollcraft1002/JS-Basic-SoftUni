function books(input) {
  Number(input[0], input[1], input[2], input[3]);
  let pages = input[0];
  let pagesPerHour = input[1];
  let remainingDays = input[2];

  let readPagesPerHour = pages / pagesPerHour;
  let result = readPagesPerHour / remainingDays;
  console.log(result);
}
books([212,20,2])