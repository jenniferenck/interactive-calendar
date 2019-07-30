import React, { Component } from 'react';
import './MonthDay.css';

class MonthDay extends Component {
  handleSelect = dayCount => {
    if (dayCount) {
      this.props.changeDateSelectionRange(dayCount);
    }
  };

  render() {
    const { dayCount, selectedDate, betweenRange, isTodaysDate } = this.props;
    return (
      <div
        className={betweenRange ? `day-box between-range` : `day-box`}
        id={selectedDate ? `selected-date` : dayCount}
        key={dayCount}
        style={isTodaysDate ? { backgroundColor: 'lightgray' } : {}}
        onClick={() => this.handleSelect(dayCount)}
      >
        {dayCount}
      </div>
    );
  }
}

export default MonthDay;
