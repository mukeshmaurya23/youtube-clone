import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { GenerateRandomName, randomTextGenerator } from "../store/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveChat, setLiveChat] = useState("");

  const chatSliceMessage = useSelector((store) => store.chat.messages);

  console.log(chatSliceMessage);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hello");
      // here we do api polling to get new messages
      dispatch(
        addMessage({
          name: GenerateRandomName(),
          text: randomTextGenerator(),
        })
      );
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: "mukesh maurya", text: liveChat }));
    setLiveChat("");
  };
  return (
    <>
      <h1 className="text-2xl font-bold">Live Chat</h1>
      <div className="bg-slate-200 w-full h-[600px] rounded-lg border border-black overflow-y-auto flex flex-col-reverse">
        {chatSliceMessage.map((meesage) => {
          return <ChatMessage name={meesage.name} text={meesage.text} />;
        })}
        {/* <ChatMessage name="mukesh" text="Nice Batting" /> */}
      </div>
      <form className="border border-black p-2" onSubmit={submitHandler}>
        <input
          type="text"
          value={liveChat}
          className="border border-black rounded-lg w-[350px]"
          onChange={(e) => setLiveChat(e.target.value)}
        />
        <button className="bg-gray-300 w-[70px] mx-1 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
