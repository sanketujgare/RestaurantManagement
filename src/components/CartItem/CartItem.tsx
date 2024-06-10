import { useEffect, useState } from "react";
import Button from "../Button/Button.tsx";
import Counter from "../Counter/Counter.tsx";
import MenuItem from "../MenuItem/MenuItem.tsx";
import styles from "./CartItem.module.scss";
import { CartItemProps } from "./CartItem.types.ts";

const CartItem = ({
  id,
  itemName,
  price,
  handlePrice,
  handleCartData,
}: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    console.log("You want reorder");
  };
  const handleCount = (value: number) => {
    console.log(value);
    setQuantity(value);
    addQuantity();
  };
  const addQuantity = () => {
    handleCartData(id, quantity);
  };

  return (
    <div className={styles.CartItem}>
      <div className={styles.CartItemInfo}>
        <h3>{itemName}</h3>
        <span>Price {price} Rs</span>
      </div>

      {/* <div className={styles.CartItemTime}>
        <span className={styles.CartItemStartTime}>7:30</span>
        <span className={styles.CartItemEndTime}>2:00</span>
      </div> */}
      <Counter handleCount={handleCount} />
      {/* <div className={styles.CartReorderButton}>
        <Button
          buttonText={"Reorder"}
          className={"Reorder"}
          handleClick={handleClick}
        />
      </div> */}
    </div>
  );
};

export default CartItem;
