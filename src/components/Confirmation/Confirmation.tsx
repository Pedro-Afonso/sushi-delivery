import { useStepContext } from "../../context/StepContext";
import styles from "./Confirmation.module.css";

export const Confirmation = () => {
  const { cart, total } = useStepContext();

  return (
    <div className={styles.container}>
      <div className={styles.confirmation}>
        {cart.map((item) => (
          <div key={item.sushi._id} className={styles.containerItem}>
            <span>{item.quantity + " x " + item.sushi.name}</span>
            <span>R&#36; {item.quantity * item.sushi.price}</span>
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
