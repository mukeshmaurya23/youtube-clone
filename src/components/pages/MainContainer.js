import React from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";

const MainContainer = () => {
  return (
    <div className="col-span-10">
      <ButtonList />
      <VideoCard />
    </div>
  );
};

export default MainContainer;
