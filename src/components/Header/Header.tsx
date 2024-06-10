import Button from "../Button/Button.tsx";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types.ts";

const Header = ({ HeaderName }: HeaderProps) => {
  return (
    <div className={styles.Header}>
      <h3 className={styles.Heading}>{HeaderName}</h3>
      
    </div>
  );
};

export default Header;
