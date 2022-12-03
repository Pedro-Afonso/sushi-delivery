import styles from "./AllProducts.module.scss";
import db from "../../../db.json";

export const AllProducts = () => {
  const { products } = db;
  return (
    <>
      <section className={styles.section}>
        {products.map((product) => (
          <div key={product._id} className={styles.card}>
            <h2>{product.name}</h2>
          </div>
        ))}
      </section>
    </>
  );
};
