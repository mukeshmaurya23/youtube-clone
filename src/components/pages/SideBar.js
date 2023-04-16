import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);

  if (!isMenu) return null;
  return (
    <div className="shadow-md p-5 col-span-2 w-60 max-h-screen no-scrollbar overflow-y-auto">
      <ul>
        <li className="p-2 hover:bg-gray-100 rounded-lg">
          <Link to="/">
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </Link>
        </li>

        <li className="p-2">
          <i class="fa fa-youtube-square" aria-hidden="true"></i> Shorts
        </li>

        <li className="p-2">
          <i class="fa fa-plus-square" aria-hidden="true"></i> Subscription
        </li>
      </ul>
      <hr className="border border-b-stone-800" />
      <ul>
        <li className="p-2">
          <i class="fa fa-home" aria-hidden="true"></i> Library
        </li>

        <li className="p-2">
          <i class="fa fa-youtube-square" aria-hidden="true"></i> History
        </li>

        <li className="p-2">
          <i class="fa fa-plus-square" aria-hidden="true"></i> Liked Videos
        </li>
        <li className="p-2">
          <i class="fa fa-plus-square" aria-hidden="true"></i> Watched Later
        </li>
        <hr className="border border-b-stone-800" />
        <ul>
          <h2 className="m-2 font-semibold">Subscriptions</h2>
          <li className="p-2">
            <i class="fa fa-user" aria-hidden="true"></i> Akshay Saini
          </li>
          <li className="p-2">
            <i class="fa fa-user" aria-hidden="true"></i> Hitesh Sir
          </li>
          <li className="p-2">
            <i class="fa fa-user" aria-hidden="true"></i> Mukesh Maurya
          </li>
          <li className="p-2">
            <i class="fa fa-user" aria-hidden="true"></i> Durga Sir
          </li>
          <li className="p-2">
            <i class="fa fa-user" aria-hidden="true"></i> Code With Harry
          </li>
        </ul>
        <hr className="border border-b-stone-800" />
        <ul>
          <h2 className="m-2 font-semibold">Explore</h2>
          <li className="p-2">
            <i class="fa fa-music" aria-hidden="true"></i> Music
          </li>
          <li className="p-2">
            <i class="fa fa-gamepad" aria-hidden="true"></i> Gaming
          </li>

          <li className="p-2">
            <i class="fa fa-video-camera" aria-hidden="true"></i> Movies
          </li>
          <li className="p-2">
            <i class="fa fa-address-card" aria-hidden="true"></i> Live
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default SideBar;
