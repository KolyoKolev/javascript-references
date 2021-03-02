const start = new Date(1990, 0, 1);
const end = new Date(2020, 10, 7);

function findNumberOfDaysBetweenDatesVersionOne(startDate, endDate) {
  let dates = [];
  while (startDate < endDate) {
    dates = [...dates, new Date(startDate)];
    startDate.setDate(startDate.getDate() + 1);
  }
  return `${dates.length} days`;
}

findNumberOfDaysBetweenDatesVersionOne(start, end);
