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
        <div
          className="day-box"
          id={this.props.selectedDate ? `active-date` : dayCount}
          key={dayCount}
          onClick={() => this.handleSelect(dayCount)}
        >
          {dayCount}
        </div>
      </>
    );
  }
}

export default CalendarDay;
