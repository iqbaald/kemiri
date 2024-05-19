import { useContext, useState } from "react";
import { profilePic } from "../constants";

import { IoMicOutline, IoImageOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { TbMapSearch, TbWriting } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import { SiGooglegemini } from "react-icons/si";
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
  } = useContext(Context);

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
        <h1 className="px-2 text-xl">Kemiri</h1>
        <img
          src={profilePic}
          alt="pp"
          className="w-10 object-fill rounded-full"
        />
      </div>

      <div className="main-container m-auto bg-white max-w-[900px]">
        {!showResult ? (
          <>
            <div className="greet max-lg:text-4xl px-6 my-6 text-5xl font-semibold ">
              <h1 className="mb-2  bg-gradient-to-r from-sky-500 via-purple-600 to-red-500 inline-block text-transparent bg-clip-text">
                Halo, Manusia
              </h1>
              <h1 className="text-neutral-300">Ada yang bisa aku bantu?</h1>
            </div>

            <div className="cards h-64 p-6 grid grid-cols-4 gap-2">
              <a href="" className={`${card}`}>
                <p className="text">
                  Suggest a Javascript library to solve a problem
                </p>
                <FaCode className={`${icon}`} />
              </a>
              <a href="" className={`${card}`}>
                <p className="text">
                  Help me craft a text response to a friend
                </p>
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
          </>
        ) : (
          <div className="result px-[5%] h-[450px] py-0 overflow-y-scroll">
            <div className="result-title my-10 mx-0 flex items-center gap-4">
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
                  <div className="w-15 p-1">
                    <SiGooglegemini className="text-blue-700 text-2xl" />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="result-text pb-8 text-base"
                  ></p>
                </div>
              </>
            ) : (
              <>
                <div className="result-data flex items-start gap-5">
                  <div className="w-15 p-1">
                    <SiGooglegemini className="text-blue-700 text-2xl animate-spin" />
                  </div>
                  <div className="loader w-full flex flex-col gap-4 ">
                    <hr className="rounded-md border-none h-5  bg-gradient-to-r from-neutral-300 via-neutral-50 to-neutral-300 " />
                    <hr className="rounded-md border-none h-5  bg-gradient-to-l from-neutral-50 via-neutral-300 to-neutral-50 " />
                    <hr className="rounded-md border-none h-5  bg-gradient-to-r from-neutral-300 via-neutral-50 to-neutral-300" />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        <div className="main-bottom bg-white max-lg:pt-2 px-6 m-auto max-w-[900px] w-full fixed bottom-0 items-center">
          <div
            className={`search-box mb-1  rounded-full bg-gray-100 drop-shadow-md flex items-center justify-between ${
              onFocus ? "bg-neutral-200 " : null
            }`}
          >
            <input
              className="bg-transparent w-full px-5 py-4 text-md font-normal border-none outline-none"
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
                <IoImageOutline className="text-2xl  text-neutral-950" />
              </a>
              <a href="#">
                <IoMicOutline className="text-2xl  text-neutral-950" />
              </a>
              {input ? (
                <a href="#">
                  <VscSend
                    onClick={() => onSent()}
                    className="text-2xl  text-neutral-950 "
                  />
                </a>
              ) : null}
            </div>
          </div>
          <div className="info">
            <p className=" text-xs text-center my-2 mb-6 text-neutral-500">
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
