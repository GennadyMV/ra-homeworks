function Calendar({date}) {

  function getDaysForFeb() {
    const year = date.getFullYear()
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
      return 28;
    }
    return 29;
  }

  const daysInMonth = [31, getDaysForFeb(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const daysWeek = [6, 0, 1, 2, 3, 4, 5];
  const daysWeekFull = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
  const monthFull = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const monthForDate = ['ЯНВАРЯ', 'ФЕВРАЛЯ', 'МАРТА', 'АПРЕЛЯ', 'МАЯ', 'ИЮНЯ', 'ИЮЛЯ', 'АВГУСТА', 'СЕНТЯБРЯ', 'ОКТЯБРЯ', 'НОЯБРЯ', 'ДЕКАБРЯ'];

  const weekDayCorrected =  daysWeek[date.getDay()];
  const monthDay = date.getDate();
  const month = date.getMonth();

  let firstWeek = new Array(7);
  let secondWeek = new Array(7);

  secondWeek[weekDayCorrected] = <td className="ui-datepicker-today">{monthDay}</td>;

  let nextDate = monthDay + 1;
  let fixedDay = false;
  for (let i = weekDayCorrected + 1; i < 7; i++) {
    if (nextDate > daysInMonth[month]) {
      nextDate = 1;
      fixedDay = true;
    }
    if (fixedDay) {
      secondWeek[i] = <td className="ui-datepicker-other-month">{nextDate}</td>;
    } else {
      secondWeek[i] = <td>{nextDate}</td>;
    }
    nextDate++;
  }

  nextDate = monthDay - 1;
  fixedDay = false;
  for (let i = weekDayCorrected - 1; i >= 0; i--) {
    if (nextDate < 1) {
      nextDate = daysInMonth[month - 1 >= 0 ? month - 1 : 0];
      fixedDay = true;
    }
    if (fixedDay) {
      secondWeek[i] = <td className="ui-datepicker-other-month">{nextDate}</td>;
    } else {
      secondWeek[i] = <td>{nextDate}</td>;
    }
    nextDate--;
  }

  let firstWeekPrevDay = monthDay - weekDayCorrected;
  fixedDay = false;
  for (let i = 6; i >= 0 ; i--) {
    firstWeekPrevDay--;
    if (firstWeekPrevDay < 1) {
      firstWeekPrevDay = daysInMonth[month - 1 >= 0 ? month - 1 : 0];
      fixedDay = true;
    }
    if (fixedDay) {
      firstWeek[i] = <td className="ui-datepicker-other-month">{firstWeekPrevDay}</td>;
    } else {
      firstWeek[i] = <td>{firstWeekPrevDay}</td>;
    }

  }

/*
  for (let i = 0; i < 7; i++) {
    if (daysWeek[weekDay] === i) {
      secondWeek.push(<td className="ui-datepicker-today">{monthDay}</td>);
    } else {
      secondWeek.push(<td>{monthDay - weekDay - (6 - i)}</td>);
    }
  }

  const firstWeekStartDay = monthDay - weekDay - 6 - 1;
  let firstWeek = [];
  for (let i = 0; i < 7; i++) {
    firstWeek.push(<td>{firstWeekStartDay - 6 + i}</td>);
  }
*/
/*
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
 */


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
        </tbody>
      </table>
    </div>
  );

}
