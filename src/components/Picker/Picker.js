import React, { Component } from 'react';
import leftArr from '../../assets/svg/left-arrow.svg';
import rightArr from '../../assets/svg/right-arrow.svg';
import PickerLogic from './PickerLogic';
import CalendarCell from './CalendarCell';

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
    for (let i=1; i<=PickerLogic().allDays.length; i++) {
      if ((i % 7) === 0) {
        this.state.monthArray.push(PickerLogic().allDays.slice(i - 7, i));
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
              <CalendarCell monthArray={this.state.monthArray} year={2018} month={11} />
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Picker;
