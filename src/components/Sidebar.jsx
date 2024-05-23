import { IoMenu } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";
import { GoPlus, GoHistory } from "react-icons/go";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function Sidebar() {
  const [extended, setExtended] = useState(true);
  const {
    onSent,
    prevPrompt,
    setRecentPrompt,
    newChat,
    darkMode,
    setDarkMode,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const handleExtended = () => {
    setExtended(!extended);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div
        className={`sidebar max-lg:hidden py-6 px-4 transition duration-300 ease-in-out min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-neutral-800
      `}
      >
        <div className="top">
          <IoMenu
            onClick={handleExtended}
            className="block ml-[10px] text-xl cursor-pointer dark:text-white"
          />
          <div
            onClick={() => newChat()}
            className="new-chat py-2 px-3 mt-10 gap-2 inline-flex items-center  bg-neutral-200 dark:bg-neutral-900  text-neutral-500 text-lg rounded-full cursor-pointer dark:hover:bg-neutral-950  hover:bg-neutral-300"
          >
            <GoPlus className="w-4 text-2xl" />
            {extended ? <p className="text-base">New Chat</p> : null}
          </div>

          {extended ? (
            <div className="recent flex flex-col">
              <p className="recent-title mt-7 mb-5 dark:text-white ">Recent </p>
              {prevPrompt.map((item, index) => {
                const displayItem =
                  item.length < 17 ? item : `${item.slice(0, 16)}...`;
                return (
                  <div
                    onClick={() => loadPrompt(item)}
                    key={index}
                    className="recent-entry p-2 gap-2 flex items-center text-neutral-900 dark:text-white rounded-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 "
                  >
                    <CiChat1 className="w-5" />
                    <p>{displayItem}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="bottom flex flex-col">
          <div className="bottom-item recent-entry p-2 gap-2 flex items-center text-neutral-900 dark:text-white rounded-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900">
            <FiHelpCircle className="w-5 text-lg" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry p-2 gap-2 flex items-center text-neutral-900  dark:text-white rounded-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900">
            <GoHistory className="w-5" />
            {extended ? <p>History</p> : null}
          </div>
          <button
            onClick={handleDarkMode}
            className="bottom-item recent-entry p-2 gap-2 flex items-center text-neutral-900 dark:text-white rounded-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900"
          >
            {darkMode ? (
              <MdOutlineDarkMode className="w-5" />
            ) : (
              <MdOutlineLightMode className="w-5" />
            )}

            {extended ? darkMode ? <p>Dark Mode</p> : <p>Light Mode</p> : null}
          </button>
        </div>
      </div>
    </div>
  );
}
