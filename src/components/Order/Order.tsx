import { useEffect, useState } from "react";
import styles from "./Order.module.scss";
import { OrderProps } from "./Order.types.ts";
import Button from "../Button/Button.tsx";

const Order = ({
  name,
  quantity,
  preparationTime,
  orderstatus,
  handleData,
}: OrderProps) => {
  console.log();
  return (
    <div className={styles.Order}>
      <div className={styles.OrderInfo}>
        <span>{name}</span>
        <span>Quantity {quantity}</span>
        <span>Time {preparationTime}</span>
      </div>
    </div>
  );
};

export default Order;
