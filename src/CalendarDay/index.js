import React, { Component } from 'react';

class CalendarDay extends Component {
  handleSelect = () => {
    //   function to call helper functions for determining logic of selections
  };

  render() {
    return (
      <>
        {this.props.selectedDate ? (
          <div className="day-box" id="active-date" key={this.props.dayCount}>
            {this.props.dayCount}
          </div>
        ) : (
          <div
            className="day-box"
            key={this.props.dayCount}
            id={this.props.dayCount}
          >
            {this.props.dayCount}
          </div>
        )}
      </>
    );
  }
}

export default CalendarDay;
