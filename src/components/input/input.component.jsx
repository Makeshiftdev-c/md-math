import React from "react";
import "./input.styles.css";

const InputField = React.forwardRef(
  (
    { handleChange, expression, handleClick, handleBlur, handleKeyCursor },
    ref
  ) => {
    const textboxwrapper = React.useRef(null);
    const [focus, isfocused] = React.useState(false);

    return (
      <div className="col-sm input-container mt-4">
        <h2>
          <label htmlFor="textarea display-6">Input:</label>
        </h2>
        <div
          ref={textboxwrapper}
          className={
            focus ? "textarea-wrapper textarea-focused" : "textarea-wrapper"
          }
          onFocus={() => {
            isfocused(true);
          }}
          onBlur={() => {
            isfocused(false);
          }}
        >
          <textarea
            ref={ref}
            spellCheck="false"
            placeholder="Enter an expression..."
            id="textarea"
            value={expression ? expression : ""}
            onChange={handleChange}
            onClick={handleClick}
            onBlur={handleBlur}
            onKeyDown={handleKeyCursor}
            onKeyUp={handleKeyCursor}
          ></textarea>
        </div>
      </div>
    );
  }
);

export default React.memo(InputField);
