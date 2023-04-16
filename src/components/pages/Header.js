import React, { useState, useEffect } from "react";
import userLogo from "../image/userLogo.png";
import hamburger from "../image/hamburger.png";
import youtubeLogo from "../image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../../constant";
import { useNavigate } from "react-router-dom";

import { addCacheSearch } from "../store/cacheSeacrhSlice";
import SearchResultVideo from "./SearchResultVideo";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  //when i type n in the search bar my state chnages
  //now when state chnge the component rerenders
  //now it will call the useEffect again becaue of the dependency array
  //now the api will be called againif if we wait for 3000 ms after 3 seconds the api will be called

  //
  console.log("component rendered" + searchQuery);

  const cacheSlice = useSelector((state) => state.cacheSearch.cachedResults);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("use effect called");
    //calling the api
    //applying debouncing of 200 ms
    // const timer = setTimeout(() => {
    //   getSuggestionApi();
    // }, 3000);
    const timer = setTimeout(() => {
      console.log(cacheSlice[searchQuery]);
      if (cacheSlice[searchQuery]) {
        setSuggestions(cacheSlice[searchQuery]);
      } else {
        getSuggestionApi();
      }
    }, 200);

    //here when i type n in the search bar the api will be called
    //again if i type fast namste then the api will be called again for each key becuase we are not declining the api call
    //so we will apply debouncing
    //so it will add all call in microtask quue and will call the api after 3000 ms by event loop

    //suppose we press n then after 3 sec it call the api
    //now if we press a then it will try to clear the timer but it will not be able to clear it because it is already called
    //so now suppose we type maste then it will clear all the timer and will call the api after 3 sec with namaste
    //so now it will call the api with namaste
    return () => {
      console.log("component unmounted");
      clearTimeout(timer);
    };
  }, [searchQuery]); //on every key press the api will be called
  const dispatch = useDispatch();
  const getSuggestionApi = async () => {
    console.log("api called=" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const jsonData = await data.json();

    console.log(jsonData[1]);
    //explain me meaning of below line
    // dispatch(addCacheSearch({ [searchQuery]: jsonData[1] })); //this is the way to add key value pair in object in javascript and this is the way to add key value pair in redux store also
    //if searchQuery:jsonData[1] then it is not working because it is not adding key value pair in object it is adding variable named searchQuery and value named jsonData[1] in object
    //so we have to add [] around searchQuery so that it will add key value pair in object
    dispatch(addCacheSearch({ [searchQuery]: jsonData[1] }));

    setSuggestions(jsonData[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col p-4  shadow-md">
        <div className="flex col-span-1 cursor-pointer">
          <img
            src={hamburger}
            alt="hamburger"
            className="h-6"
            onClick={() => toggleMenuHandler()}
          />
          <Link to="/">
            <img src={youtubeLogo} alt="youtubeLogo" className="h-6 mx-6" />
          </Link>
        </div>
        <div className="col-span-10">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="px-5 w-1/2 border border-gray-300 rounded-l-full p-1 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
          />
          <button
            className="border border-gray-300 rounded-r-full p-1 px-3 bg-gray-100"
            onClick={() => {
              navigate(`/results/${searchQuery}`);
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>

          {showSuggestions && (
            <div className="absolute bg-white py-2 mt-2 px-3 w-[36.6%] shadow-md rounded-md ">
              <ul className="p-3">
                {suggestions.map((suggestion, index) => (
                  <li className="py-2 hover:bg-gray-200 rounded-lg" key={index}>
                    <i className="fa fa-search mx-2" aria-hidden="true"></i>{" "}
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-1">
          <img src={userLogo} alt="userLogo" className="h-6" />
        </div>
      </div>
    </>
  );
};

export default Header;
