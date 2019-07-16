import React, { Component } from 'react';

class CalendarDay extends Component {
  handleSelect = dayCount => {
    if (dayCount) {
      this.props.changeDateSelectionRange(dayCount);
    }
  };

  render() {
    const { dayCount } = this.props;
    return (
      <>
        {this.props.selectedDate ? (
          <div
            className="day-box"
            id="active-date"
            key={dayCount}
            onClick={() => this.handleSelect(dayCount)}
          >
            {dayCount}
          </div>
        ) : (
          <div
            className="day-box"
            key={dayCount}
            id={dayCount}
            onClick={() => this.handleSelect(dayCount)}
          >
            {dayCount}
          </div>
        )}
      </>
    );
  }
}

export default CalendarDay;
