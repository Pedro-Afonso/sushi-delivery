import { useEffect, useState } from "react";
import { useStepContext } from "../../context/StepContext";
import { useAppSelector } from "../../hooks";
import styles from "./Confirmation.module.css";

export const Confirmation = () => {
  const cart = useAppSelector((state) => state.step.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.product.price * item.quantity));
    setTotal(sum);
  }, [cart]);

  return (
    <div className={styles.container}>
      <div className={styles.confirmation}>
        {cart.map((item) => (
          <div key={item.product.id} className={styles.containerItem}>
            <span>{item.quantity + " x " + item.product.name}</span>
            <span>R&#36; {item.quantity * item.product.price}</span>
          </div>
        ))}
        <hr />
        <div className={styles.containerTotal}>
          <span>Valor Total:</span>
          <span>R&#36;{total}</span>
        </div>
      </div>
    </div>
  );
};
