import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { openMenu } from "../store/appSlice";
import { GOOGLE_API_KEY } from "../../constant";

const SearchResultVideo = () => {
  const [searchVideoResult, setSearchVideoResult] = useState([]);
  const { searchQuery } = useParams();
  useEffect(() => {
    fetchVideoBySearch(searchQuery);
  }, [searchQuery]);
  console.log(searchQuery, "im in searchQuery");

  const fetchVideoBySearch = async (searchQuery) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${GOOGLE_API_KEY}`
    );
    const jsonData = await data.json();
    setSearchVideoResult(jsonData.items);
    console.log(jsonData, "im in fetchVideoBySearch");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(() => openMenu());
  }, []);
  return (
    <div
      className="flex flex-wrap "
      style={{
        width: "79rem",
      }}
    >
      {searchVideoResult &&
        searchVideoResult.map((video) => (
          <div className="w-1/6 p-2 mx-3 shadow-lg" key={video.id.videoId}>
            <Link to={`/watch?v=${video.id.videoId}`}>
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
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SearchResultVideo;
