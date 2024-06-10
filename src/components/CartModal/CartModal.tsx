import styles from "./CartModal.module.scss";
import { CartModalProps } from "./CartModal.types.ts";

const CartModal = ({
  cartData,
  totalPrice,
  handleCloseModal,
}: CartModalProps) => {
  console.log(cartData);
  console.log(typeof totalPrice);
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={handleCloseModal}>
          close
        </span>
        <h2>Order Details</h2>
        <ul>
          {cartData.map((item) => (
            <li key={item.id}>
              {item.itemName} - ${item.price} X {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice()}</p>
      </div>
    </div>
  );
};

export default CartModal;
