import { useEffect, useState } from "react";

import styles from "./Confirmation.module.css";
import { useAppSelector } from "../../hooks";
import { getCurrency } from "../../utils";

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
            <span>{getCurrency(item.quantity * item.product.price)}</span>
          </div>
        ))}
        <hr />
        <div className={styles.containerTotal}>
          <span>Valor Total:</span>
          <span>{getCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
};
