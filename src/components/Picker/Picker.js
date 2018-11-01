import React, { Component } from 'react';
import leftArr from '../../assets/svg/left-arrow.svg';
import rightArr from '../../assets/svg/right-arrow.svg';

class Picker extends Component {
  state = {
    currentDay: 'Sunday',
    currentDate: 26,
    currentMonth: 'October',
    currentYear: 2018,
    selectedMonth: 'December',
    allDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weeksNumbers: ['1st', '2nd', '3rd', '4th', '5th'],
    weeks: {
      '1st': [1,2,3,4,5,6,7],
      '2nd': [8,9,10,11,12,13,14],
      '3rd': [15,16,17,18,19,20,21],
      '4th': [22,23,24,25,26,27,28],
      '5th': [29,30,31]
    }
  }
  
  render () {
    return (
      <div className='picker__container'>
        <div className='picker__header'>
          <span className='picker__current-day'>{this.state.currentDay}</span>
          <span className='picker__current-date'>{this.state.currentMonth} {this.state.currentDate} {this.state.currentYear}</span>
        </div>
        <div className='picker__actions'>
          <img className='picker__arrows picker__arrows--left' alt='arrows' src={leftArr} />
          <span className='picker__actions--month'>{this.state.selectedMonth}</span>
          <img className='picker__arrows picker__arrows--right' alt='arrows' src={rightArr} />
        </div>
        <div className='picker__body'>
          <table className='picker__table'>
            <thead>
              <tr>
                {
                  this.state.allDays.map((dayName) => {
                    return <th key={dayName} className='picker__weekday'>{dayName.substr(0, 3)}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                this.state.weeksNumbers.map((weeksNumber) => {
                  return (
                    <tr key={weeksNumber}>
                      {
                        this.state.weeks[weeksNumber].map((day) => {
                          return (
                            <td style={{width: '14.2857%'}} key={day} className='picker__day'>{day}</td>
                          )
                        })
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Picker;
