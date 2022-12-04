import { useFetchDocuments } from "../../hooks";
import { ProductCard } from "./ProductCard";
import { RemoveProduct, UpdateProduct } from "./Modal";
import { IProduct } from "../interface";

import styles from "./AllProducts.module.scss";

export const AllProducts = () => {
  const { documents: products } = useFetchDocuments<IProduct>("products");

  return (
    <>
      <section className={styles.section}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {/* Modals */}
      <UpdateProduct />
      <RemoveProduct />
      {/* /Modals */}
    </>
  );
};
