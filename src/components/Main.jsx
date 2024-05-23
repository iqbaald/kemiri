import { useContext, useState } from "react";
import { profilePic, kemiriLogo } from "../constants";

import {
  IoFastFoodOutline,
  IoMicOutline,
  IoImageOutline,
} from "react-icons/io5";
import { TbMapSearch, TbWriting } from "react-icons/tb";
import { LiaUserInjuredSolid } from "react-icons/lia";
import { GoPlus } from "react-icons/go";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { VscSend } from "react-icons/vsc";
import { Context } from "../context/Context";

export default function Main() {
  const {
    onSent,
    recentPrompt,
    input,
    setInput,
    showResult,
    loading,
    resultData,
    setRecentPrompt,
    darkMode,
    setDarkMode,
    newChat,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const promptText = event.target.innerText;
    loadPrompt(promptText);
  };

  const [onFocus, setOnFocus] = useState(false);

  const handleFocus = () => {
    setOnFocus(true);
  };
  const handleBlur = () => {
    setOnFocus(false);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const card =
    " p-4 rounded-xl relative text-neutral-800 bg-neutral-100 hover:bg-neutral-200 dark:text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 max-lg:h-40 ";
  const icon =
    "absolute bottom-0 right-0 w-8 h-8 m-4 p-[6px] bg-white dark:bg-neutral-900 rounded-full";

  return (
    <div
      className={`main flex-1 relative ${darkMode && "dark bg-neutral-900"} `}
    >
      <div className="nav p-4 flex flex-row justify-between items-center z-10 max-lg:fixed max-lg:w-full bg-white dark:bg-neutral-900">
        <h1 className="px-2 text-xl dark:text-white">Kemiri AI</h1>
        <div className="flex  w-1/4 justify-end gap-2">
          <button
            onClick={() => newChat()}
            className="new-chat p-2 gap-2 inline-flex items-center  text-neutral-900 bg-neutral-200 dark:text-white dark:bg-neutral-600 text-lg rounded-full cursor-pointer dark:hover:bg-neutral-950  hover:bg-neutral-300"
          >
            <GoPlus className="w-6" />
          </button>
          <button
            onClick={handleDarkMode}
            className="bottom-item lg:hidden recent-entry p-2 gap-2 flex items-center text-neutral-900 bg-neutral-200 dark:text-white dark:bg-neutral-600 rounded-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900"
          >
            {darkMode ? (
              <MdOutlineDarkMode className="w-6" />
            ) : (
              <MdOutlineLightMode className="w-6" />
            )}
          </button>
          <div className="border-r m-2  border-neutral-800 dark:border-neutral-200"></div>
          <img
            src={profilePic}
            alt="pp"
            className="w-10 object-fill rounded-full"
          />
        </div>
      </div>

      <div className="main-container m-auto bg-white dark:bg-neutral-900 max-w-[900px] max-lg:overflow-auto  max-lg:py-20">
        {!showResult ? (
          <>
            <div className="greet max-lg:text-4xl px-6 my-6 text-5xl font-semibold ">
              <h1 className="mb-2  bg-gradient-to-r from-sky-500 via-purple-600 to-red-500 inline-block text-transparent bg-clip-text">
                Halo, Manusia
              </h1>
              <h1 className="text-neutral-300 dark:text-neutral-600">
                Ada yang bisa dibantu?
              </h1>
            </div>

            <div className="cards h-64 p-6 grid grid-cols-4 max-lg:grid-cols-1   gap-2">
              <a className={`${card}`} onClick={handleClick}>
                <p className="text dark:text-white">
                  Buatkan aku resep gulai ayam
                </p>
                <IoFastFoodOutline className={`${icon}`} />
              </a>
              <a href="" className={`${card}`} onClick={handleClick}>
                <p className="text dark:text-white">
                  Apakah steve jobs menjadi steve unjobs ketika menganggur
                </p>
                <LiaUserInjuredSolid className={`${icon}`} />
              </a>
              <a href="" className={`${card}`} onClick={handleClick}>
                <p className="text dark:text-white">
                  Ide Aktivitas Seru untuk Anak Saat Road Trip
                </p>
                <TbMapSearch className={`${icon}`} />
              </a>
              <a href="" className={`${card}`} onClick={handleClick}>
                <p className="text dark:text-white">
                  Tuliskan cerita lucu tentang dunia hewan
                </p>
                <TbWriting className={`${icon}`} />
              </a>
            </div>
          </>
        ) : (
          <div className="result px-[5%] h-[450px] py-0 overflow-y-scroll dark:text-white">
            <div className="result-title my-10 mx-0 flex items-center gap-4 ">
              <img
                src={profilePic}
                alt="pp"
                className="w-10 object-fill rounded-full"
              />
              <p>{recentPrompt}</p>
            </div>

            {!loading ? (
              <>
                <div className="result-data flex items-start gap-5">
                  <img src={kemiriLogo} className="w-8 " />
                  <p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="result-text pb-7 text-base"
                  ></p>
                </div>
              </>
            ) : (
              <>
                <div className="result-data flex items-start gap-5">
                  <img src={kemiriLogo} className=" w-7 animate-spin" />
                  <div className="loader w-full flex flex-col gap-4 ">
                    <hr
                      className={`rounded-md border-none h-5  bg-gradient-to-r  ${
                        darkMode
                          ? "from-neutral-600 via-neutral-800 to-neutral-600"
                          : "from-neutral-300 via-neutral-50 to-neutral-300"
                      }`}
                    />
                    <hr
                      className={`rounded-md border-none h-5  bg-gradient-to-l  ${
                        darkMode
                          ? "from-neutral-800 via-neutral-600 to-neutral-800"
                          : "from-neutral-50 via-neutral-300 to-neutral-50"
                      } `}
                    />
                    <hr
                      className={`rounded-md border-none h-5  bg-gradient-to-r  ${
                        darkMode
                          ? "from-neutral-600 via-neutral-800 to-neutral-600"
                          : " from-neutral-300 via-neutral-50 to-neutral-300"
                      }`}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        <div className="main-bottom bg-white  dark:bg-neutral-900 max-lg:pt-2 px-6 m-auto max-w-[900px] w-full fixed bottom-0 items-center">
          <div
            className={`search-box mb-1 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-between ${
              onFocus ? "bg-neutral-200 dark:bg-neutral-700 " : null
            }`}
          >
            <input
              className="bg-transparent w-full px-5 py-4 text-md font-normal border-none outline-none dark:placeholder-neutral-500 "
              type="text"
              placeholder="Masukkan prompt di sini"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
              value={input}
            />
            <div className="button flex gap-4 mr-4">
              <a href="#">
                <IoImageOutline className="text-2xl  text-neutral-950 dark:text-white" />
              </a>
              <a href="#">
                <IoMicOutline className="text-2xl  text-neutral-950 dark:text-white" />
              </a>
              {input ? (
                <a href="#">
                  <VscSend
                    onClick={() => onSent()}
                    className="text-2xl  text-neutral-950 dark:text-white "
                  />
                </a>
              ) : null}
            </div>
          </div>
          <div className="info">
            <p className=" text-xs text-center my-2 mb-6 text-neutral-500 dark:text-neutral-400">
              Ini adalah project sederhana yang memanfaatkan API dari gemini AI,
              jadi mohon dimaafkan jika terdapat error. Dibuat oleh
              <a
                className="underline"
                href="https://iqbaald.github.io/portfolio-web/"
                target="blank"
              >
                {" "}
                IqbaalD
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
