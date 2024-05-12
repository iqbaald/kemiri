import { useState } from "react";
import { profilePic } from "../constants";

import { IoMicOutline, IoImageOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { TbMapSearch, TbWriting } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";

export default function Main() {
  const [onFocus, setOnFocus] = useState(false);

  const handleFocus = () => {
    setOnFocus(true);
  };
  const handleBlur = () => {
    setOnFocus(false);
  };

  const card =
    " p-4 rounded-xl relative text-neutral-800 bg-neutral-100 hover:bg-neutral-200";
  const icon =
    "absolute bottom-0 right-0 w-8 h-8 m-4 p-[6px] bg-white rounded-full";

  return (
    <div className="main flex-1 relative">
      <div className="nav p-4 flex flex-row justify-between items-center">
        <h1 className="px-2 text-xl">Gemini</h1>
        <img
          src={profilePic}
          alt="pp"
          className="w-10 object-fill rounded-full"
        />
      </div>

      <div className="main-container m-auto bg-white max-w-[900px]">
        <div className="greet px-6 my-6 text-5xl font-semibold ">
          <h1 className="mb-2 bg-gradient-to-r from-sky-500 via-purple-600 to-red-500 inline-block text-transparent bg-clip-text">
            Hello, human
          </h1>
          <h1 className="text-neutral-300">How can I help you</h1>
        </div>

        <div className="cards h-64 p-6 grid grid-cols-4 gap-2">
          <a href="" className={`${card}`}>
            <p className="text">
              Suggest a Javascript library to solve a problem
            </p>
            <FaCode className={`${icon}`} />
          </a>
          <a href="" className={`${card}`}>
            <p className="text">Help me craft a text response to a friend</p>
            <TbWriting className={`${icon}`} />
          </a>
          <a href="" className={`${card}`}>
            <p className="text">
              Road trip drive time and kid entertainment ideas
            </p>
            <TbMapSearch className={`${icon}`} />
          </a>
          <a href="" className={`${card}`}>
            <p className="text">
              Provide questions to help me prepare for an interview
            </p>
            <TbWriting className={`${icon}`} />
          </a>
        </div>

        <div className="main-bottom px-6 m-auto max-w-[900px] w-full absolute bottom-0 items-center">
          <div
            className={`search-box mb-1  rounded-full bg-neutral-100 flex items-center justify-between ${
              onFocus ? "bg-neutral-200 " : null
            }`}
          >
            <input
              className="bg-transparent w-full px-5 py-4 text-md font-normal border-none outline-none"
              type="text"
              placeholder="Enter a prompt here"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div className="button flex gap-4 mr-4">
              <a href="#">
                <IoImageOutline className="text-2xl  text-neutral-950" />
              </a>
              <a href="#">
                <IoMicOutline className="text-2xl  text-neutral-950" />
              </a>
              <a href="#">
                <VscSend className="text-2xl  text-neutral-950" />
              </a>
            </div>
          </div>
          <div className="info">
            <p className="text-xs text-center my-2 mb-6 text-neutral-500">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <a className="underline" href="#">
                {" "}
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
