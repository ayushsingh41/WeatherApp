// eslint-disable-next-line react/prop-types
import style from "./Input.module.css";
const Input = ({ inputHandler, val, keyHandler }) => {
  return (
    <input
      className={style.inp}
      type="text"
      onChange={(e) => {
        inputHandler(e.target.value);
      }}
      value={val}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          keyHandler();
        }
      }}
    />
  );
};

export default Input;
