/*
* File to store all the logic for the date picker
*
*/

const PickerLogic = (month, year) => {
  // Create a new Date object
  const targetDate = new Date();
  
  // Validate year and month
  month = month > 1 && month <= 12 ? month : targetDate.getMonth() + 1;
  year = year ? year : targetDate.getFullYear();
  
  // Object to get returned
  const calendar = {};
  
  // All the days in a week
  calendar.weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // All months in a year
  calendar.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Current day name
  calendar.currentDay = calendar.weekDays[targetDate.getDay()];
  // Current date
  calendar.currentDate = targetDate.getDate();
  // Current month name
  calendar.currentMonth = calendar.months[targetDate.getMonth()];
  // Current year
  calendar.currentYear = targetDate.getFullYear();

  // Get the total days in a given month
  calendar.getTotalDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // All the days in a month
  calendar.allDaysInMonth = [];

  // Push all the days to allDaysInMonth array
  for (let i=1; i<=calendar.getTotalDaysInMonth(month, year); i++) {
    calendar.allDaysInMonth.push(i);
  }

  // Get the first day in month
  calendar.getFirstDayInMonth = (month, year) => {
    return new Date(year, month - 1, 1).getDay();
  }

  // Push nulls to the allDaysInMonth array
  for (let i=1; i<=calendar.getFirstDayInMonth(month, year); i++) {
    calendar.allDaysInMonth.unshift(null);
  }

  for (let i=1; i<=42; i++) {
    if (calendar.allDaysInMonth.length < i) {
      calendar.allDaysInMonth.push(null);
    }
  }
  
  // Return the object
  return calendar;
}

export default PickerLogic;
