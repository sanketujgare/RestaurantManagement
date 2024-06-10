import { useState } from "react";
import Header from "../../Header/Header.tsx";
import MenuItem from "../../MenuItem/MenuItem.tsx";
import MenuList from "../../MenuList/MenuList.tsx";
import styles from "./MenuPageView.module.scss";
import {
  MenuPageViewProps,
  cartItemType,
  menuItemType,
} from "./MenuPageView.types.ts";
import Button from "../../Button/Button.tsx";

const MenuPageView = ({
  menuData,
  cartData,
  setCartData,
  setCartIsClicked,
  setMenuIsClicked,
}: MenuPageViewProps) => {
  const handleCartData = (item: menuItemType) => {
    setCartData([
      ...cartData,
      {
        itemName: item.name,
        price: item.price,
        quantity: item.quantity,
        recipe: item.recipe,
        preparationTime: 25,
      },
    ]);
  };
  const cartHandleClick = () => {
    setCartIsClicked();
    setMenuIsClicked();
  };
  // console.log(cartData);

  return (
    <div className={styles.MenuPage}>
      <Header HeaderName={"Menu"} />
      <div className={styles.Cartbtn}>
        <Button
          buttonText={"Cart"}
          className={"CartButton"}
          handleClick={cartHandleClick}
        />
      </div>
      <MenuList menuData={menuData} handleCartData={handleCartData} />
    </div>
  );
};

export default MenuPageView;
