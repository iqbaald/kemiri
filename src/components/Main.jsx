import { profilePic } from "../constants";
import { FaCode } from "react-icons/fa6";
import { TbMapSearch, TbWriting } from "react-icons/tb";

export default function Main() {
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
        <div className="greet p-6 my-8 text-5xl font-semibold ">
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
      </div>
    </div>
  );
}
