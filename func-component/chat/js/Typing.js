'use strict';

function Typing({message }) {
  return (
    <li key={message.id}>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i> {message.from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <i className="fa fa-circle online"></i>
      <i className="fa fa-circle online" style={{color: '#AED2A6'}}></i>
      <i className="fa fa-circle online" style={{color: '#DAE9DA'}}></i>
    </li>
  );
}

export default Typing;