function skiTrip(input) {
  let days = Number(input[0]);
  let establishment = input[1];
  let rating = input[2];
  let nights = days - 1;
  const roomForOnePerson = 18.0; //per night
  const apartment = 25.0; //per night
  const presidentApartment = 35.0; //per night
  let totalPrice = 0;
  switch (true) {
    case nights < 10:
      if (establishment == "room for one person") {
        totalPrice = roomForOnePerson * nights;
        //well it does nothing practicly
        totalPrice = roomForOnePerson * nights
      } else if (establishment == "apartment") {
        totalPrice = apartment * nights;
        totalPrice -= totalPrice * 0.3;
      } else if (establishment == "president apartment") {
        totalPrice = presidentApartment * nights;
        totalPrice -= totalPrice * 0.1;
      }
      break;
    case nights >= 10 && nights < 15:
      if (establishment == "room for one person") {
        //well it does nothing practicly
        totalPrice = roomForOnePerson * nights
      } else if (establishment == "apartment") {
        totalPrice = apartment * nights;
        totalPrice -= totalPrice * 0.35;
      } else if (establishment == "president apartment") {
        totalPrice = presidentApartment * nights;
        totalPrice -= totalPrice * 0.15;
      }
      break;
    case nights > 15:
      if (establishment == "room for one person") {
        //well it does nothing practicly
        totalPrice = roomForOnePerson * nights
      } else if (establishment == "apartment") {
        totalPrice = apartment * nights;
        totalPrice -= totalPrice * 0.5;
      } else if (establishment == "president apartment") {
        totalPrice = presidentApartment * nights;
        totalPrice -= totalPrice * 0.2;
      }
      break;
  }
  if (rating == "positive") {
    totalPrice += totalPrice * 0.25;
    console.log(totalPrice.toFixed(2));
  } else {
    totalPrice -= totalPrice * 0.1;
    console.log(totalPrice.toFixed(2));
  }
}
skiTrip([12, "room for one person", "positive"]);
