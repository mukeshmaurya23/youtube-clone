import React, { useState, useEffect } from "react";
import { YOUTUBE_POPULAR_API } from "../../constant";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";
import LiveChat from "./LiveChat";

const Shimmer = () => {
  return (
    <div className="flex items-center p-3">
      <div className="w-[10rem] h-[6rem] bg-gray-300 rounded-xl animate-pulse"></div>
      <div className="ml-3 mb-4">
        <div className="w-40 h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
        <div className="w-20 h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
        <div className="w-14 h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
        <div className="w-8 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};
const PopularVideos = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  useEffect(() => {
    fetchPopularVideos();
  }, []);
  const fetchPopularVideos = async () => {
    const response = await fetch(YOUTUBE_POPULAR_API);
    const data = await response.json();
    setPopularVideos(data.items);
    console.log(data);
  };

  return (
    <>
      <div className="mb-6 ml-4">
        <button className="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 mt-4 m-4 rounded">
          All
        </button>
        <button className="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 mt-4 m-4 rounded">
          For You
        </button>
        <button className="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 mt-4 m-4 rounded">
          Watched Later
        </button>

        <ul className="max-h-[147.8rem] overflow-y-auto border rounded-lg bg-gray-100">
          {popularVideos && popularVideos.length > 0 ? (
            popularVideos.map((suggestion) => (
              <li key={suggestion.id}>
                <Link
                  to={`/watch?v=${suggestion.id}`}
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-gray-300 hover:rounded-2xl"
                >
                  <img
                    src={suggestion.snippet.thumbnails.medium.url}
                    alt=""
                    className="w-25 h-[6rem] object-cover rounded"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-800">
                      {suggestion.snippet.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {suggestion.snippet.channelTitle}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            // If no suggestions have been loaded yet, show a shimmer effect to indicate that data is loading
            <div className="p-3 text-gray-600">
              {Array.from({ length: 20 }).map((_, index) => (
                <Shimmer key={index} />
              ))}
            </div>
          )}
        </ul>
      </div>
      <div className="ml-2">
        <LiveChat />
      </div>
    </>
  );
};

export default PopularVideos;

/*



 <div className="">
      <h1 className="font-bold mx-5  text-lg">Popular Videos</h1>
      {popularVideos.map((video) => (
        <div className="p-3 mx-3 shadow-lg">
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <div className="">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt=""
                className="h-44"
              />

              <div className="">
                <h2>{video.snippet.localized.title}</h2>
                <p>{video.statistics.viewCount}</p>
                <p>{video.snippet.channelTitle}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
*/
