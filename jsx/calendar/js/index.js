import React from 'react';
import Calendar from './Calendar.js';

let now = new Date();
//now.setDate(now.getDate() - 888);

ReactDOM.render(
  <Calendar date={now} />,
  document.getElementById('root')
);
