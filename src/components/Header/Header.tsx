import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <nav>
        <span>Sushi Delivery</span>
      </nav>
    </div>
  );
};
