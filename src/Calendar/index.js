import React, { Component } from 'react';
import MonthView from '../MonthView';

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
      <div>
        <MonthView />
        <MonthView />
      </div>
    );
  }
}

export default Calendar;
