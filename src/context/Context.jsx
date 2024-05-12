import { createContext } from "react";
import runChat from "../config/api";
import PropTypes from "prop-types";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await runChat(prompt);
  };

  onSent("Siapa kamu?");

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
