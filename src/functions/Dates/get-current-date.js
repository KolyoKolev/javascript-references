function getCurrentDate() {
  const DATE = new Date();
  let day = DATE.getDay();
  let month = DATE.getMonth() + 1;
  const YEAR = DATE.getFullYear();

  day < 10 ? (day = `0${day}`) : day;
  month < 10 ? (month = `0${month}`) : month;

  return `${day}/${month}/${YEAR}`;
}

getCurrentDate();
