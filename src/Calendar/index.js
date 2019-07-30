import React, { Component } from 'react';
import MonthView from '../MonthView';

import './Calendar.css';

class Calendar extends Component {
  renderCurrentCalendarView = () => {
    if (this.state.calendarView === 'month') {
      return (
        <>
          <MonthView firstMonth />
          <MonthView secondMonth />
        </>
      );
    }
  };

  render() {
    return (
      <div className="calendar">
        <MonthView />
        <MonthView />
      </div>
    );
  }
}

export default Calendar;
