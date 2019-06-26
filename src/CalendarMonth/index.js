import React, { Component } from 'react';

class CalendarMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      currentMonth: 'whatever month is it',
      firstSelectedDate: 'todays date',
      lastSelectedDate: null
    };
  }
  render() {
    return (
      <div>
        <div>left arrow</div>
        <div>Month goes here</div>
        <div>right arrow</div>

        <div className="days-row">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>TH</div>
          <div>F</div>
          <div>S</div>
        </div>

        <div className="days-container">
          {/* take whatever month it currently is and map thru all the dates of the month */}
        </div>
      </div>
    );
  }
}

export default CalendarMonth;
