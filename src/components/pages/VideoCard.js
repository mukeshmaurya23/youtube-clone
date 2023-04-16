import React, { useState, useEffect } from "react";
import { YOUTUBE_API } from "../../constant";
import axios from "axios";
import { Link } from "react-router-dom";
const VideoCard = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    console.log(response);
    setVideos(response.items);
  };
  return (
    <div
      className="flex flex-wrap mx-3 "
      style={{
        width: "79rem",
      }}
    >
      {videos &&
        videos.map((video) => (
          <div className="w-1/6 p-2 mx-3 shadow-lg" key={video.id}>
            <Link to={`/watch?v=${video.id}`}>
              <div className="h-54">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt=""
                  className="h-43"
                />
              </div>
              <div className="">
                <h1 className="text-md font-semibold">{video.snippet.title}</h1>
                <p className="text-sm">{video.snippet.channelTitle}</p>
                <p className="text-sm">{video.statistics.viewCount} views</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default VideoCard;
