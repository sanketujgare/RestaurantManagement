import { useState } from "react";
import CartItem from "../CartItem/CartItem.tsx";
import styles from "./Cart.module.scss";
import { CartProps } from "./Cart.types.ts";
import Modal from "../Modal/Modal.tsx";
import Header from "../Header/Header.tsx";
import CartModal from "../CartModal/CartModal.tsx";
import Button from "../Button/Button.tsx";
import { postOrderAPI } from "../../services/OrdersAPI.ts";

const Cart = ({
  cartData,
  setCartData,
  setMenuIsClicked,
  setCartIsClicked,
  setOrderIsClicked,
}: CartProps) => {
  const [showModal, setShowModal] = useState(false);

  const handlePayNow = async () => {
    setShowModal(true);
    setOrderIsClicked();

    const postdata = await postOrderAPI({
      tableNo: 9,
      orderItemDetails: [...cartData],
    });
    console.log(postdata);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCartData = (id, value) => {
    const cartItem = cartData.find((item) => item.id === id);
    cartItem.quantity = value;
    setCartData([...cartData]);
  };

  const calculateTotalPrice = (cartData) => {
    return cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const homehandleleClick = () => {
    setCartIsClicked();
    setMenuIsClicked();
  };
  console.log(cartData);
  return (
    <div className={styles.CartContainer}>
      <Header HeaderName={"Cart"} />
      <div className={styles.Hometbtn}>
        <Button
          buttonText={"Home"}
          className={"HomeButton"}
          handleClick={homehandleleClick}
        />
      </div>
      <div className={styles.CartList}>
        {cartData.map((item) => (
          <CartItem key={item.id} {...item} handleCartData={handleCartData} />
        ))}
      </div>
      <button onClick={handlePayNow}>Pay Now</button>

      {showModal && (
        <CartModal
          cartData={cartData}
          totalPrice={() => calculateTotalPrice(cartData)}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Cart;
