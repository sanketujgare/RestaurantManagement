import Button from "../Button/Button.tsx";
import Order from "../Order/Order.tsx";
import styles from "./OrderList.module.scss";
import { OrderListProps } from "./OrderList.types.ts";

const OrderList = ({ data, handleData }: OrderListProps) => {
  const handleClick = (order) => {
    let status = "";
    if (
      order.orderStatus === "new"
        ? (status = "preparing")
        : order.orderStatus === "preparing"
        ? (status = "completed")
        : (status = "completed")
    )
      handleData(order,status);
  };
  return (
    <div className={styles.OrderContainer}>
      {data.map((order, index) =>
        order.orderItemDetails.map((item) => (
          <div className={styles.OrdersList}>
            <span className={styles.TableNo}>TableNo {order.tableNo}</span>
            <Order
              key={index}
              name={item.itemName}
              quantity={item.quantity}
              preparationTime={item.preparationTime}
              id={item._id}
              handleData={handleData}
              orderstatus={order.orderStatus}
            />
            <Button
              className={
                order.orderStatus === "new" ? "StartOrder" : "StopOrder"
              }
              buttonText={order.orderstatus === "new" ? "Stop" : "Stop"}
              handleClick={() => handleClick(order)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
