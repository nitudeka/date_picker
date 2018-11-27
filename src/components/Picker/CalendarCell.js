import React from 'react';

const calendarCell = (props) => {
  // Know when the month starts
  let startMonth = false;
  // Know where the month ends
  let endMonth = false;
  const classNames = ['picker__day'];
  return props.monthArray.map((days, i) => {
    return (
      <tr key={i}>
        {
          days.map((date, i) => {
            if (date === 1 && startMonth) {
              endMonth = true;
            };
            if (date === 1 && !startMonth) {
              startMonth = true;
            };
            if (startMonth) {
              classNames.push('picker__day--active');
            };
            return <td style={{width: '14.2857%', height: '16px'}} key={i} className={classNames.join(' ')}>{date}</td>
          })
        }
      </tr>
    )
  })
}

export default calendarCell;
