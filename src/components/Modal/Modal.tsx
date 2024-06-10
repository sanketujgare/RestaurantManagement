import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types.ts";

const Modal = ({ handlePayModal }: ModalProps) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.ModalContainer}>
        <h3>payNow</h3>
        <span onClick={handlePayModal}>close</span>
      </div>
    </div>
  );
};

export default Modal;
