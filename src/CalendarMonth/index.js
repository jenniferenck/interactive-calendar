import React, { Component } from 'react';
import moment from 'moment';

class CalendarMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(), // gives the current date that we can use to produce additional dates
      currentMonth: moment(), // note: months are indexed starting at 0
      firstSelectedDate: moment().date(),
      lastSelectedDate: null
    };
  }

  renderDays = () => {
    let count = 1;
    let days = [];

    while (count <= +this.state.currentMonth.daysInMonth()) {
      days.push(<div key={count}>{count}</div>);
      count++;
    }
    return days;
  };

  render() {
    // console.log(this.state.currentMonth);
    let leftArrow = '<';
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <div
          className="top-row"
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div>{leftArrow}</div>
          <div>{this.state.currentMonth.format('MMM')}</div>
          <div>></div>
        </div>

        <div
          className="days-row"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>TH</div>
          <div>F</div>
          <div>S</div>
        </div>

        <div className="days-container">{this.renderDays()}</div>
      </div>
    );
  }
}

export default CalendarMonth;
