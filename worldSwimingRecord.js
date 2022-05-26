function isRecord(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeInSeconds = Number(input[2]);

  let neededDistance = distanceInMeters * timeInSeconds;
  distanceInMeters = distanceInMeters / 15;
  distanceInMetersFixed = Math.floor(distanceInMeters.toFixed(2)) * 12.5;
  let totalTime = neededDistance + distanceInMetersFixed;
  if (recordInSeconds <= totalTime) {
    console.log(
      `No, he failed! He was ${Math.floor(totalTime - recordInSeconds).toFixed(
        2
      )} seconds slower.`
    );
  } else if(recordInSeconds>=totalTime){
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  }
}
isRecord([10464, 1500, 20]);
