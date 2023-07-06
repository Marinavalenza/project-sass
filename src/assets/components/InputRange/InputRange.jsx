import React from "react";
import "./InputRange.scss";

const InputRange = () => {
  return (
    <div className="range-inputs">
      <div className="Carbohydrate">
        Carbohydrate
        <input type="range" min="0" max="100" />
      </div>
      <div className="Protein">
        Protein
        <input type="range" min="0" max="100" />
      </div>
      <div className="Fat">
        Fat
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
};

export default InputRange;
