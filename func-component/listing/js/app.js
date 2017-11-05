'use strict';

import React from 'react';
import {render} from 'react-dom';

import Listing from './Listing.js';

function GetData() {
  const url = 'https://neto-api.herokuapp.com/etsy';
  const Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", url, false);
  Httpreq.send(null);

  return JSON.parse(Httpreq.responseText);
}


ReactDOM.render(
  <Listing items={GetData()} />,
  document.getElementById('root')
);
