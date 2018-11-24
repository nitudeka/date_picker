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
  calendarContainer.tatalDays = new Date(year, month + 1, 0).getDate();
  calendarContainer.allDays = [];

  return calendarContainer;
}

console.log(calendar(11, 2018));

/*
  -- The function should return
    -- Current day
    -- Current date
    -- Current month
    -- Current year
    -- Total days in month
    -- All days of month as an array. e.g:- [29, 30, 1, 2, 3, 4, ........, 28, 29, 30, 31, 1, 2, 3, 4, 5]
*/
