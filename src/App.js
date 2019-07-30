import React, { Component } from 'react';
import './App.css';
import CalendarMonth from './CalendarMonth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { calendarView: 'month' }; // options to view month, week or day
  }

  renderCurrentCalendarView = () => {
    if (this.state.calendarView === 'month') {
      return (
        <>
          <CalendarMonth />
          <CalendarMonth />
        </>
      );
    }
  };

  render() {
    return (
      <div className="App">
        {/* display current month first followed by suceeding month */}
        {this.renderCurrentCalendarView()}

        {/* <CalendarMonth /> */}
      </div>
    );
  }
}

export default App;
