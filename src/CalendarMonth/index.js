import React, { Component } from 'react';
import moment from 'moment';

class CalendarMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: moment().format('MMM'), // note: months are indexed starting at 0
      firstSelectedDate: moment().date(),
      lastSelectedDate: null
    };
  }

  renderDays = () => {};

  render() {
    // console.log(this.state.currentMonth);
    console.log(moment().format('M'));
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <div>left arrow</div>
        <div>{this.state.currentMonth}</div>
        <div>right arrow</div>

        <div className="days-row" style={{ display: 'flex' }}>
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
