import React, { useContext } from "react";
import { Context } from "../context/Context"; // Update the path if needed
import kemiriLogo from "../assets/kemiriLogo.png"; // Update the path if needed

const ResultComponent = () => {
  const { loading, resultData, showResult } = useContext(Context);

  return !loading && showResult ? (
    <div className="result-data flex items-start gap-5">
      <img src={kemiriLogo} className="w-8" alt="Kemiri Logo" />
      <div dangerouslySetInnerHTML={{ __html: resultData }} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ResultComponent;
