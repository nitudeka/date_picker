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
  // Do a for loop to push the last days of the last month to alldays array
  for (let i=0; i>-numberOfBlankDaysBeforeMonth; i--) {
    calendarContainer.allDays.unshift(new Date(year, month, i).getDate())
  }
  for (let i=1; i<=calendarContainer.totalDays; i++) {
    calendarContainer.allDays.push(new Date(year, month, i).getDate());
  }

  return calendarContainer;
}

console.log(calendar(11, 2018));

/*
  -- do a for loop to push the last days of the last month
*/


/*
  -- The function should return
    -- Current day
    -- Current date
    -- Current month
    -- Current year
    -- Total days in month
    -- All days of month as an array. e.g:- [29, 30, 1, 2, 3, 4, ........, 28, 29, 30, 31, 1, 2, 3, 4, 5]
*/
