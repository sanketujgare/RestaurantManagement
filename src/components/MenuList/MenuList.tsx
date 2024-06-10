import Counter from "../Counter/Counter.tsx";
import MenuItem from "../MenuItem/MenuItem.tsx";
import styles from "./MenuList.module.scss";
import { MenuListProps } from "./MenuList.types.ts";

const MenuList = ({ menuData, handleCartData }: MenuListProps) => {
  return (
    <div className={styles.MenuList}>
      {menuData.map((item) => (
        <MenuItem
          {...item}
          handleCartData={() => handleCartData({ ...item, quantity: 1 })}
        />
      ))}
  
    </div>
  );
};

export default MenuList;
