import React, { Component } from 'react';
import moment from 'moment';

import './CalendarMonth.css';
import CalendarDay from '../CalendarDay';

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

  getFirstDayOfMonth = currentMonth => {
    const year = currentMonth.year();
    const monthIndex = currentMonth.month(); // gives index of current month
    // get day 1 of month index:
    return new Date(`${year}-${monthIndex + 1}-01`).getDay();
  };

  // will need to refactor so this can be used for rendering previous and next months
  renderDays = () => {
    let dayCount = 1;
    let month = [];
    let days = [];
    const { currentMonth, firstSelectedDate, lastSelectedDate } = this.state;

    const firstDayIndex = this.getFirstDayOfMonth(currentMonth);

    // add first week starting with blanks for previous month
    while (days.length < firstDayIndex) {
      days.push(<CalendarDay key={currentMonth.date(dayCount)} dayCount="" />);
    }

    // add real dates, devisible by 7, push onto month & clear days array
    while (dayCount <= +currentMonth.daysInMonth()) {
      dayCount === firstSelectedDate || dayCount === lastSelectedDate
        ? days.push(
            <CalendarDay
              selectedDate
              key={currentMonth.date(dayCount)}
              dayCount={dayCount}
            />
          )
        : days.push(
            <CalendarDay
              key={currentMonth.date(dayCount)}
              dayCount={dayCount}
            />
          );
      dayCount++;
      // if a complete week
      if (days.length === 7) {
        month.push(
          <div key={month.length} className="week">
            {days}
          </div>
        );
        days = [];
      }
    }
    // add last week incomplete row
    if (days.length) {
      while (days.length < 7) {
        days.push(
          <CalendarDay key={currentMonth.date(dayCount)} dayCount="" />
        );
      }
      month.push(
        <div key={month.length} className="week">
          {days}
        </div>
      );
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
    console.log(this.state.currentMonth.date(1));
    const leftArrow = '<';
    return (
      <div className="calendar">
        <div className="month-row">
          <div>{leftArrow}</div>
          <div>{this.state.currentMonth.format('MMM')}</div>
          <div>></div>
        </div>

        <div className="days-row">
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
