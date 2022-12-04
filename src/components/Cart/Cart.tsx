import { useEffect, useState } from "react";

import { useAppSelector } from "../../hooks";
import styles from "./Cart.module.css";

export const Cart = () => {
  const cart = useAppSelector((state) => state.step.cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.product.price * item.quantity));
    setTotal(sum);
  }, [cart]);

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        Valor Total: <span>R&#36;{total}</span>
      </div>
    </div>
  );
};
