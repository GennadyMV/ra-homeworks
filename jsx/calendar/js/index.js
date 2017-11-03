let now = new Date();
now.setDate(now.getDate() - 50);



ReactDOM.render(
  <Calendar date={now} />,
  document.getElementById('root')
);
