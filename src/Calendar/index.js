import React, { Component } from 'react';
import moment from 'moment';

import MonthView from '../MonthView';

import './Calendar.css';

class Calendar extends Component {
  renderCurrentCalendarView = () => {
    if (this.state.calendarView === 'month') {
      return (
        <div className="calendar">
          <MonthView firstMonth />
          <MonthView secondMonth />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="calendar">
        <MonthView monthOrder="firstMonth" />
        <MonthView monthOrder="secondMonth" />
      </div>
    );
  }
}

export default Calendar;
