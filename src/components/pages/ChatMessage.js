import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <>
      <div className="flex p-3">
        <i className="fa fa-user mt-1" aria-hidden="true"></i>
        <span className="ml-2">{name}</span>
        <p className="ml-4">{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
