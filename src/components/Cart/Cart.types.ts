import { cartItemType } from "../Pages/MenuPageView/MenuPageView.types";
export interface CartProps {
  cartData: cartItemType[];
  setCartData: () => void;
  setMenuIsClicked: (value: React.SetStateAction<boolean>) => void;
  setCartIsClicked: (value: React.SetStateAction<boolean>) => void;
  setOrderIsClicked: () => void;
}
