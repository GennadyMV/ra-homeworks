'use strict';

import Accordion from "./Accordion.jsx"

const title = "Заголовок аккордеона";

const blocks = [
  {
    title: "Block 1",
    text:  "Text 1"
  },
  {
    title: "Block 2",
    text:  "Text 2"
  },
  {
    title: "Block 3",
    text:  "Text 3"
  }
];

ReactDOM.render(<Accordion title={title} blocks={blocks}/>, document.getElementById('root'));