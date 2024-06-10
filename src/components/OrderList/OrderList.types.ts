import { cartItemType } from "../Pages/MenuPageView/MenuPageView.types";

export interface OrderListProps {
  data: {
    _id: string;
    tableNo: number;
    orderItemDetails: cartItemType[];
    preparationTime: number;
    totalBill: number;
    orderStatus: string;
    paymentStatus: string;
  };
  handleData: (order:cartItemType,status:string) => void;
}
