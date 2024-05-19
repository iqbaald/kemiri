import { createContext, useState } from "react";
import runChat from "../config/api";
import PropTypes from "prop-types";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setInput("");
  };

  // Typing animation
  const typeAnimation = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 100 * index);
  };

  // Translate and format raw response from Gemini

  const formatResponse = (response) => {
    // Pisahkan per paragraf
    const paragraphs = response.split("\n\n");

    // Tambahkan <br> di antara paragraf
    const paragraphFilter = paragraphs
      .map((item) => item + "<br><br>")
      .join("");

    // Ubah tanda "**" jadi bold
    const boldFilter = paragraphFilter
      .split("**")
      .map((part, index) => {
        return index % 2 === 0 ? part : `<b>${part}</b>`;
      })
      .join("");

    // Ubah tanda "*" menjadi poin-poin menggunakan tag <li> atau "- "
    const formattedResponse = boldFilter
      .split("* ")
      .map((part, index) => {
        return index === 0 ? part : `<li>${part}</li>`;
      })
      .join("");

    return formattedResponse;
  };

  const onSent = async (prompt) => {
    setInput("");
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    // Translate and format raw response from Gemini
    const formattedResponse = formatResponse(response);

    setLoading(false);

    let resultArray = formattedResponse.split(" ");
    for (let i = 0; i < resultArray.length; i++) {
      const nextWord = resultArray[i];
      typeAnimation(i, nextWord + " ");
    }
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
