import React, { Component } from 'react';
import moment from 'moment';

import './MonthView.css';
import MonthDay from '../MonthDay';

class MonthView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment().date(),
      firstSelectedDate: null, // gets current day of month #
      lastSelectedDate: null
    };
  }

  changeDateSelectionRange = dayCount => {
    console.log('day selected:', dayCount);
    const { firstSelectedDate, lastSelectedDate } = this.state;
    // check first if last is selected yet, if not, continue
    if (!lastSelectedDate) {
      // check if date is after firstSelected date -> make lastSelectedDate
      if (dayCount > firstSelectedDate) {
        this.setState({ lastSelectedDate: dayCount });
      }
      if (dayCount < firstSelectedDate) {
        this.setState({
          lastSelectedDate: firstSelectedDate,
          firstSelectedDate: dayCount
        });
      }
    } else {
      this.setState({ firstSelectedDate: dayCount });
    }

    // if LAST IS SELECTED, reset selection to firstSelected and lastSelected to null
  };

  getFirstDayOfMonth = () => {
    const { year, monthIndex } = this.props;
    // get day 1 of month index:

    return moment(`${year}-${monthIndex + 1}-01`, 'YYYY-MM-DD').weekday();
  };

  // will need to refactor so this can be used for rendering previous and next months
  renderDays = () => {
    let dayCount = 1;
    let month = [];
    let days = [];
    const { firstSelectedDate, lastSelectedDate, currentDate } = this.state;
    const { monthIndex, year } = this.props;

    const firstDayIndex = this.getFirstDayOfMonth();
    // console.log('firstDayIndex', firstDayIndex);

    // add first week starting with blanks for previous month
    let blankDatesCount = 1;
    while (days.length < firstDayIndex) {
      days.push(
        <MonthDay
          key={blankDatesCount}
          dayCount=""
          changeDateSelectionRange={this.changeDateSelectionRange}
        />
      );
      blankDatesCount++;
    }

    const daysInMonth = +moment(
      `${year}, ${monthIndex + 1}`,
      'YYYY, MM'
    ).daysInMonth();

    // add real dates, devisible by 7, push onto month & clear days array

    while (dayCount <= daysInMonth) {
      days.push(
        <MonthDay
          selectedDate={
            dayCount === firstSelectedDate || dayCount === lastSelectedDate
              ? true
              : false
          }
          betweenRange={
            dayCount > firstSelectedDate && dayCount < lastSelectedDate
              ? true
              : false
          }
          // today's count needs to take into place current day, month and year
          isTodaysDate={dayCount === currentDate ? true : false}
          key={`${dayCount} ${monthIndex}, ${year}`}
          dayCount={dayCount}
          changeDateSelectionRange={this.changeDateSelectionRange}
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
          <MonthDay
            key={blankDatesCount}
            dayCount=""
            changeDateSelectionRange={this.changeDateSelectionRange}
          />
        );
        blankDatesCount++;
      }
      month.push(
        <div key={month.length} className="week">
          {days}
        </div>
      );
    }
    return month;
  };

  render() {
    // console.log(this.props);
    const leftArrow = '<';
    return (
      <div className="month">
        <div className="month-row">
          <div>{leftArrow}</div>
          <div>
            {moment()
              .month(this.props.monthIndex)
              .format('MMM')}
          </div>
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

export default MonthView;
