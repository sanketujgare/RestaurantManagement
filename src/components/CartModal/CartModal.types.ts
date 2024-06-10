import { cartItemType } from "../Pages/MenuPageView/MenuPageView.types";
export interface CartModalProps {
  cartData: cartItemType[];
  totalPrice: () => number;
  handleCloseModal: () => void;
}
