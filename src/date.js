/*
 * Library to return the dates in a month as an array
 *
 */

// Dependencies

const calendar = (month, year) => {
  // Validate the parameters
  month = typeof(month) === 'number' && month >= 1 && month <= 12 ? month - 1 : new Date().getMonth();
  year = typeof(year) === 'number' ? year : new Date().getFullYear();

  // Create a new Date object
  const targetDate = new Date();
  targetDate.setMonth(month);
  targetDate.setFullYear(year);

  // Container to store the returned values
  const calendarContainer = {};

  calendarContainer.currentDay = targetDate.getDay();
  calendarContainer.currentDate = targetDate.getDate();
  calendarContainer.currentMonth = targetDate.getMonth() + 1;
  calendarContainer.currentYear = targetDate.getFullYear();
  calendarContainer.totalDays = new Date(year, month + 1, 0).getDate();
  calendarContainer.allDays = [];

  // Get the number of blank days in the current month
  const numberOfBlankDaysBeforeMonth = new Date(year, month, 1).getDay();
  const numberOfBlankDaysAfterMonth = new Date(year, month + 1, 1).getDay();
  // Do a for loop to push the last days of the last month to allDays array
  for (let i=0; i>-numberOfBlankDaysBeforeMonth; i--) {
    calendarContainer.allDays.unshift(new Date(year, month, i).getDate())
  }
  // Push all days of current month to allDays array
  for (let i=1; i<=calendarContainer.totalDays; i++) {
    calendarContainer.allDays.push(new Date(year, month, i).getDate());
  }
  // Do a for loop to push the first days of the next month to allDays array
  for (let i=1; i<=numberOfBlankDaysAfterMonth; i++) {
    calendarContainer.allDays.push(new Date(year, month, i+calendarContainer.totalDays).getDate());
  }
  if (calendarContainer.allDays.length !== 42) {
    const numbeOfDaysToPush = 42 - calendarContainer.allDays.length;
    const lastDate = calendarContainer.allDays[calendarContainer.allDays.length - 1];
    for (let i=1; i<=numbeOfDaysToPush; i++) {
      calendarContainer.allDays.push(lastDate + i);
    }
  }

  return calendarContainer;
}

// Export the module
module.exports = calendar;
