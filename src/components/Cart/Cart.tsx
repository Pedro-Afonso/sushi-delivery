import { useStepContext } from "../../context/StepContext";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { total } = useStepContext();

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        Valor Total: <span>R&#36;{total}</span>
      </div>
    </div>
  );
};
