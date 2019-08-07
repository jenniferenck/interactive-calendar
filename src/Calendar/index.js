import React, { Component } from 'react';
import moment from 'moment';

import MonthView from '../MonthView';

import './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMonthIndex: moment().month(),
      firstYear: moment().year()
    };
  }

  getSecondMonth = () => {
    const { firstMonthIndex } = this.state;
    return firstMonthIndex < 11 ? firstMonthIndex + 1 : 0;
  };

  getSecondYear = () => {
    const { firstMonthIndex, firstYear } = this.state;
    return firstMonthIndex < 11 ? firstYear : firstYear + 1;
  };

  shiftMonths = direction => {
    const { firstMonthIndex } = this.state;
    if (direction === 'previous') {
      if (firstMonthIndex > 0) {
        this.setState(st => ({ firstMonthIndex: st.firstMonthIndex - 1 }));
      } else {
        this.setState(st => ({
          firstMonthIndex: 11,
          firstYear: st.firstYear - 1
        }));
      }
    } else {
      if (firstMonthIndex < 11) {
        this.setState(st => ({ firstMonthIndex: st.firstMonthIndex + 1 }));
      } else {
        this.setState(st => ({
          firstMonthIndex: 0,
          firstYear: st.firstYear + 1
        }));
      }
    }
  };

  render() {
    console.log(this.state);
    const { firstMonthIndex, firstYear } = this.state;
    return (
      <div className="calendar">
        <div className="arrows">
          <div
            onClick={() => this.shiftMonths('previous')}
            className="left-arrow"
          >
            Previous Month
          </div>
          <div onClick={() => this.shiftMonths('next')} className="right-arrow">
            Next Month
          </div>
        </div>

        <div className="months">
          <MonthView monthIndex={firstMonthIndex} year={firstYear} />
          <MonthView
            monthIndex={this.getSecondMonth()}
            year={this.getSecondYear()}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
