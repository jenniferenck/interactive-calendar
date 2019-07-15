import React, { Component } from 'react';
import moment from 'moment';

import './CalendarMonth.css';

class CalendarMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(), // gives the current date that we can use to produce additional dates
      currentMonth: moment(), // note: months are indexed starting at 0
      firstSelectedDate: moment().date(), // gets current day of month #
      lastSelectedDate: null
    };
  }

  renderDays = () => {
    let count = 1;
    let month = [];
    let days = [];
    const { currentMonth } = this.state;

    // get day of week that month starts on

    const year = currentMonth.year();
    const monthIndex = currentMonth.month(); // gives index of current month
    // get day 1 of month index:
    let firstDayIndex = new Date(`${year}-${monthIndex + 1}-01`).getDay();

    // add first week with blanks
    while (days.length < firstDayIndex) {
      days.push(
        <div className="day-box" key="empty">
          empty
        </div>
      );
    }

    // now that we added blanks, add real dates, devisible by 7, push onto month & clear days array
    while (count <= +currentMonth.daysInMonth()) {
      days.push(
        <div className="day-box" key={count}>
          {count}
        </div>
      );
      count++;
      // if a complete week
      if (days.length === 7) {
        month.push(<div className="week">{days}</div>);
        days = [];
      }
    }
    // add last week incomplete row
    if (days.length) {
      while (days.length < 7) {
        days.push(
          <div className="day-box" key="empty">
            empty
          </div>
        );
      }
      month.push(<div className="week">{days}</div>);
    }
    return month;
  };

  getPreviousMonth = () => {
    // for rendering
  };

  getNextMonth = () => {
    // for rendering
  };

  render() {
    console.log(this.state.currentMonth.year());
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
