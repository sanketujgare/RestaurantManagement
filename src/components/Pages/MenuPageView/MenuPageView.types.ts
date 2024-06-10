import { MenuListProps } from "../../MenuList/MenuList.types";
import { CartProps } from "../../Cart/Cart.types";
import { Dispatch, SetStateAction } from "react";

export interface cartItemType {
  id?: number;
  itemName: string;
  price: number;
  quantity: number;
  preparationTime: number;
  recipe?: string;
}
export interface menuItemType {
  id?: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  recipe?: string;
}
export interface MenuPageViewProps {
  menuData: menuItemType[];
  cartData: cartItemType[];

  setMenuIsClicked: () => void;
  setCartIsClicked: () => void;
  setCartData: Dispatch<SetStateAction<cartItemType[]>>;
}
