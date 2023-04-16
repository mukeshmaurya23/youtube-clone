import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";

import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_ID } from "../../constant";
import PopularVideos from "./PopularVideos";
import Comment from "./Comment";
const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const [videoId, setVideoId] = useState(null);

  const [show, setShow] = useState(true);

  const videoIdY = searchParams.get("v");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    fetchVideoById();
  }, [videoIdY]);

  const handleLoad = () => {
    setLoading(false);
  };

  const fetchVideoById = async () => {
    const response = await fetch(YOUTUBE_VIDEO_ID + "&id=" + videoIdY);
    const data = await response.json();
    setVideoId(data.items);
    console.log(data);
  };

  let description = videoId?.map(
    (video) => video.snippet.localized.description
  );
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  // console.log(description.map((desc) => desc.slice(0, 200)));

  if (!videoId) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="flex flex-wrap ">
        {/* Video player */}
        <div className="w-[60rem] lg:w-2/3 px-5">
          {/* Loading animation */}
          {loading && (
            <div className="animate-pulse h-[600px] w-[60rem] rounded-2xl bg-gray-200"></div>
          )}

          {/* Video player iframe */}
          <iframe
            onLoad={handleLoad}
            src={`https://www.youtube.com/embed/${videoIdY}?enablejsapi=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="p-1 m-5 rounded-lg"
            width="950"
            height="500"
          ></iframe>

          {/* Video information */}
          {videoId.map((video) => (
            <div className="flex flex-col">
              <h1
                className="font-bold mx-5  text-lg "
                style={{
                  fontSize: "1.4rem",
                }}
              >
                {video.snippet.localized.title}
              </h1>

              <h2 className="p-3 text-lg font-semibold mx-3 mt-2 flex">
                {/* <i class="fa fa-user" aria-hidden="true"></i>{" "} */}
                <img
                  src={video.snippet.thumbnails.default.url}
                  alt=""
                  className="rounded-full h-8 w-8 mr-2"
                />
                {video.snippet.channelTitle}
                <span
                  className="ml-4 bg-red-600 text-white text-sm rounded-full"
                  style={{
                    padding: "0.2rem 0.5rem",
                  }}
                >
                  Subsribe
                </span>
              </h2>
              <p
                className="text-md mb-5 m-2  border-gray-800 bg-slate-200 p-6 rounded-lg text-black"
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {show
                  ? description.map((desc) => desc.slice(0, 200))
                  : description}
                <span
                  onClick={handleShow}
                  className="text-gray-900 cursor-pointer font-bold text-md"
                >
                  {show ? " Show More" : " Show Less"}
                </span>
              </p>
            </div>
          ))}
          <div className="border border-gray-300 rounded">
            <h1 className="text-lg font-semibold p-3">Comments</h1>
            <div className="border border-gray-300 rounded m-5">
              <Comment />
            </div>
          </div>
        </div>

        {/* Video suggestions */}
        <div className="lg:w-1/3 px-5">
          <PopularVideos />
        </div>
      </div>
    </>
  );
};

export default WatchPage;

/**
 * 
 * 
 * 
 * 
 *  <div className="flex flex-col">
        <iframe
          className="p-1 m-5"
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${videoIdY}?enablejsapi=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div>
 */
