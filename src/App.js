import React, { Component } from 'react';
import Calendar from './Calendar';

import './App.css';

class App extends Component {
  // can we revert this component back to a function and use hooks?
  constructor(props) {
    super(props);
    this.state = { calendarView: 'month' }; // options to view month, week or day
  }

  render() {
    return (
      <div className="App">
        <Calendar calendarView />
      </div>
    );
  }
}

export default App;
