'use strict';

import Star from './Star.js';

function Stars({count}) {

  if (!(count > 0 && count < 6)) {
    return null;
  }

  let starsList = new Array(count);
  for (let idx = 0; idx < count; idx++) {
    starsList.push(<li key={idx}><Star /></li>)
  }

  return(
    <ul className="card-body-stars u-clearfix">
      {starsList}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0
};

export default Stars;