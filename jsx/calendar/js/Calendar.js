const daysWeek = [6, 0, 1, 2, 3, 4, 5];
const daysWeekFull = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const monthFull = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const monthForDate = ['ЯНВАРЯ', 'ФЕВРАЛЯ', 'МАРТА', 'АПРЕЛЯ', 'МАЯ', 'ИЮНЯ', 'ИЮЛЯ', 'АВГУСТА', 'СЕНТЯБРЯ', 'ОКТЯБРЯ', 'НОЯБРЯ', 'ДЕКАБРЯ'];

function Calendar({date}) {

  const year     = date.getFullYear();
  const monthDay = date.getDate();
  const month    = date.getMonth();
  const weekDayCorrected =  daysWeek[date.getDay()];

  const daysInMonth = [31, getDaysForFeb(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const firstMonthDay = daysWeek[new Date(year, month, 1).getDay()];

  let firstWeek = new Array(7);
  let secondWeek = new Array(7);
  let thirdWeek  = new Array(7);
  let fourthWeek  = new Array(7);
  let fifthWeek  = new Array(7);
  let sixthWeek  = new Array(7);


  function getDaysForFeb() {
    const year = date.getFullYear();
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
      return 28;
    }
    return 29;
  }

  function getForDay(day) {
    return day === monthDay ? <td key={keyGen(month, day)} className="ui-datepicker-today">{day}</td> : <td key={keyGen(month, day)}>{day}</td>;
  }

  function keyGen(pmonth, pday) {
    return `${year}${pmonth}${pday}`;
  }

  let nextDate = 1;
  firstWeek[firstMonthDay] = getForDay(nextDate++);

  const prevMonth = month - 1 >= 0 ? month - 1 : 0;
  let prevDate = daysInMonth[prevMonth];
  for(let i = firstMonthDay - 1; i >= 0; i--) {
    firstWeek[i] = <td key={keyGen(prevMonth, prevDate)} className="ui-datepicker-other-month">{prevDate--}</td>;
  }

  for(let i = firstMonthDay + 1; i < 7; i++) {
    firstWeek[i] = getForDay(nextDate++);
  }

  for(let i = 0; i < 7; i++) {
    secondWeek[i] = getForDay(nextDate);
    thirdWeek[i] = getForDay(nextDate + 7);
    fourthWeek[i] = getForDay(nextDate + 14);
    nextDate++;
  }
  nextDate+=14;

  if (nextDate <= daysInMonth[month]) {
    let fixedDay = false;
    for(let i = 0; i < 7; i++) {
      if (nextDate > daysInMonth[month]) {
        nextDate = 1;
        fixedDay = true;
      }
      fifthWeek[i] = fixedDay ? <td key={keyGen(month+1, nextDate)} className="ui-datepicker-other-month">{nextDate}</td> : getForDay(nextDate);
      nextDate++;
    }

    if (!fixedDay) {
      for(let i = 0; i < 7; i++) {
        if (nextDate > daysInMonth[month]) {
          nextDate = 1;
          fixedDay = true;
        }
        sixthWeek[i] = fixedDay ? <td key={keyGen(month+1, nextDate)} className="ui-datepicker-other-month">{nextDate}</td> : getForDay(nextDate);
        nextDate++;
      }
    }
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{daysWeekFull[weekDayCorrected]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{monthDay}</div>
          <div className="ui-datepicker-material-month">{monthForDate[month]}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>

      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{monthFull[month]}</span>&nbsp;<span class="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {firstWeek}
          </tr>
          <tr>
            {secondWeek}
          </tr>
          <tr>
            {thirdWeek}
          </tr>
          <tr>
            {fourthWeek}
          </tr>
          {fifthWeek[0] && (
            <tr>
              {fifthWeek}
            </tr>
          )}
          {sixthWeek[0] && (
            <tr>
              {sixthWeek}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

}

export default Calendar;