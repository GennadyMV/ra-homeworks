'use strict';


import Message from './Message.js';
import Response from './Response.js';
import Typing from './Typing.js';

function MessageHistory({list}) {

  if (list === null || list.length === 0) {
    return null;
  }

  const messageList = list.map(msg => {
    let ChatMsg = "unknown";
    switch(msg.type) {
      case "message":
        ChatMsg = Message;
        break;
      case "response":
        ChatMsg = Response;
        break;
      case "typing":
        ChatMsg = Typing;
        break;
      default:
        console.log("Error. Unknown message type:" + msg.type);
        return null;
    }

    return <ChatMsg key={msg.id} message={msg} />
  });

  return (
    <ul>
      {messageList}
    </ul>
  );
}

MessageHistory.defaultProps = {
  list: []
};

export default MessageHistory;