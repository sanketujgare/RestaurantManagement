import { MenuItemProps } from "../MenuItem/MenuItem.types";
import {
  cartItemType,
  menuItemType,
} from "../Pages/MenuPageView/MenuPageView.types";

export interface MenuListProps {
  menuData: menuItemType[];
  handleCartData: (arg1: cartItemType) => void;
}
