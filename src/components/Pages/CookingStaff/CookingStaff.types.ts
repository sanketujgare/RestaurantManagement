import { cartItemType } from "../MenuPageView/MenuPageView.types";
export interface ordersDatatype {
  _id: string;
  tableNo: number;
  orderItemDetails: cartItemType[];
  preparationTime: number;
  totalBill: number;
  orderStatus: string;
  paymentStatus: string;
}

export interface CookingStaffProps {}
