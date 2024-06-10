import { useState } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types.ts";

const Button = ({ buttonText, className, handleClick }: ButtonProps) => {
  const [isclicked, setIsClicked] = useState(false);
  const OnClick = () => {
    handleClick();
  };

  return (
    <button onClick={OnClick} className={styles[`${className}`]}>
      {buttonText}
    </button>
  );
};

export default Button;
