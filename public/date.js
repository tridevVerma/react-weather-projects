let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
const currDay = days[date.getDay()];
const currDate =
  date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
const currMonth = months[date.getMonth()];

module.exports = { currDay, currDate, currMonth };
