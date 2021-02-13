import React, { useState } from "react";
import MathJax from "react-mathjax-preview";
import "./output.styles.css";

const OutputDisplay = ({ expression }) => {
  const [error, setError] = useState(false);

  return (
    <div className="col-lg mt-4 output-container">
      <h2 className="display-6">Output:</h2>
      <div className="output-wrapper">
        <div className="container-fluid output">
          <MathJax
            onError={() => {
              setError(true);
              console.log(error);
            }}
            math={String.raw`${"$$" + expression + "$$"}`}
          />
          {error ? <div class="error-message text-center">Error</div> : null}
        </div>
      </div>
    </div>
  );
};

export default OutputDisplay;
