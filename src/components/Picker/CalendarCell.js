import React from 'react';

const calendarCell = (props) => {
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
              if (classNames.indexOf('picker__day--active') > -1) {

              } else {
                classNames.push('picker__day--active');
              }
            };
            if (endMonth) {
              classNames.pop();
            }
            return <td style={{width: '14.2857%', height: '16px'}} key={i} className={classNames.join(' ')}>{date}</td>
          })
        }
      </tr>
    )
  })
}

export default calendarCell;
