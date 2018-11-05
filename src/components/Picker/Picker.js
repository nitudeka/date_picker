import React, { Component } from 'react';
import PickerLogic from './PickerLogic';
import leftArr from '../../assets/svg/left-arrow.svg';
import rightArr from '../../assets/svg/right-arrow.svg';

class Picker extends Component {
  state = {
    currentDay: PickerLogic().currentDay,
    currentDate: PickerLogic().currentDate,
    currentMonth: PickerLogic().currentMonth,
    currentYear: PickerLogic().currentYear,
    selectedMonth: PickerLogic().currentMonth,
    monthArray: []
  }
  
  render () {
    for (let i=1; i<=PickerLogic().allDaysInMonth.length; i++) {
      if ((i % 7) === 0) {
        this.state.monthArray.push(PickerLogic().allDaysInMonth.slice(i - 7, i));
      }
    }
    
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
                  PickerLogic().weekDays.map((day) => {
                    return <th className='picker__weekday' key={day} title={day}>{day.slice(0, 3)}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                this.state.monthArray.map((days, i) => {
                  return (
                    <tr key={i}>
                      {
                        days.map((day, i) => {
                          return <td style={{width: '14.2857%', height: '16px'}} key={i} className='picker__day'>{day}</td>
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

/*
{
  this.state.weeksNumbers.map((weeksNumber) => {
    return (
      <tr key={weeksNumber}>
        {
          this.state.weeks[weeksNumber].map((day, i) => {
            return (
              <td style={{width: '14.2857%'}} key={i} className='picker__day'>{day}</td>
            )
          })
        }
      </tr>
    )
  })
}
*/
