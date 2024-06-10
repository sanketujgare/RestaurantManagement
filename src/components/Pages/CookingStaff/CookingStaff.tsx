import { useEffect, useState } from "react";
import Header from "../../Header/Header.tsx";
import Order from "../../Order/Order.tsx";
import OrderList from "../../OrderList/OrderList.tsx";
import styles from "./CookingStaff.module.scss";
import { CookingStaffProps, ordersDatatype } from "./CookingStaff.types.ts";
import { getordersAPI, updateOrdersAPI } from "../../../services/OrdersAPI.ts";
import { cartItemType } from "../MenuPageView/MenuPageView.types.ts";

const CookingStaff = ({}: CookingStaffProps) => {
  const [Orderstate, setOrdersState] = useState("new");
  const [ordersData, setOrdersData] = useState<ordersDatatype[]>([]);

  const getdata = async () => {
    const data = await getordersAPI();
    console.log(data);
    setOrdersData(data);
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleData = (order, status) => {
    // order.orderStatus = "";
    setOrdersData([...ordersData]);
    console.log(order, status);
    completeOrders(order, status);
  };

  const completeOrders = async (order, status) => {
    console.log(order._id, status);
    const response = await updateOrdersAPI(order._id, status);
  };

  const handleClick = (e: any) => {
    setOrdersState(e.target.innerText);
  };
  console.log(ordersData);

  const FilterData =
    Orderstate === "new"
      ? ordersData.filter((order) => order.orderStatus === "new")
      : Orderstate === "preparing"
      ? ordersData.filter((order) => order.orderStatus === "preparing")
      : null;

  console.log(FilterData);
  return (
    <div className={styles.CookingStaffContainer}>
      <Header HeaderName={"Orders"} />
      <div className={styles.OrdersType}>
        <span onClick={handleClick} className={styles.Orderstab}>
          new
        </span>
        <span onClick={handleClick} className={styles.Orderstab}>
          preparing
        </span>
      </div>
      <div className={styles.OrdersList}>
        <OrderList data={FilterData} handleData={handleData} />
      </div>
    </div>
  );
};

export default CookingStaff;
