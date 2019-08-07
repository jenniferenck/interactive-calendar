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

  render() {
    const { firstMonthIndex, firstYear } = this.state;
    return (
      <div className="calendar">
        <div>Previous Month</div>
        <div>Next Month</div>

        <MonthView monthIndex={firstMonthIndex} year={firstYear} />
        <MonthView
          monthIndex={this.getSecondMonth()}
          year={this.getSecondYear()}
        />
      </div>
    );
  }
}

export default Calendar;
