import { useEffect, useState } from "react";
import style from "./InputCheckbox.module.scss";
import { FaCheck } from "react-icons/fa6";

const InputCheckbox = (props) => {
  const { checked } = props || null;
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]);
  console.log();
  return (
    <label className={style.InputCheckbox}>
      <input
        className={`${style.input} ${isChecked ? style.activeInput : ""}`}
        type="checkbox"
        defaultChecked={isChecked}
        onClick={() => toggleCheckbox()}
      />
      <span
        className={`${style.checked} ${isChecked ? style.activeChecked : ""}`}
      >
        <FaCheck />
      </span>
    </label>
  );
};

export default InputCheckbox;
