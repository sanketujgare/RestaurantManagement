import { useState } from "react";
import Counter from "../Counter/Counter.tsx";
import styles from "./MenuItem.module.scss";
import { MenuItemProps } from "./MenuItem.types.ts";
import Button from "../Button/Button.tsx";

const MenuItem = ({
  name,
  price,
  description,
  handleCartData,
}: MenuItemProps) => {
  const [isclicked, setIsClicked] = useState(false);
  const handleClick = () => {
    handleCartData();
  };
  return (
    <div className={styles.MenuItem}>
      <div className={styles.MenuInfo}>
        <h3>{name}</h3>
        <span>{price}</span>
        <p>{description}</p>
      </div>

      <div className={styles.MenuButton}>
        <div className={styles.MenuButton}>
          <Button
            className={"AddToCart"}
            buttonText={"Add to Cart"}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
