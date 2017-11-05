'use strict';

import Star from './Star.js';

function Stars({count}) {

  if (!(count > 0 && count < 6)) {
    return null;
  }

  const shortid = require('shortid');
  let starsList = new Array(count);
  for (let idx = 0; idx < count; idx++) {
    starsList.push(<li key={shortid.generate()}><Star /></li>)
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