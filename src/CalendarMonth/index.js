import React, { Component } from 'react';
import moment from 'moment';

import './CalendarMonth.css';

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
    const daysOfWeek = ['S', 'M', 'T', 'W', 'TH', 'F', 'S'];
    const leftArrow = '<';
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <div
          className="month-row"
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
          <div className="day">S</div>
          <div className="day">M</div>
          <div className="day">T</div>
          <div className="day">W</div>
          <div className="day">TH</div>
          <div className="day">F</div>
          <div className="day">S</div>
        </div>

        <div className="days-container">{this.renderDays()}</div>
      </div>
    );
  }
}

export default CalendarMonth;
