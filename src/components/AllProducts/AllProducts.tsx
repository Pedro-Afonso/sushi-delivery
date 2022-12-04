import { useFetchDocuments } from "../../hooks";
import { ProductCard } from "./ProductCard";
import { RemoveProduct, UpdateProduct } from "./Modal";
import { IProduct } from "../interface";

import styles from "./AllProducts.module.scss";
import { NoCard } from "./NoCard";
import { AddProduct } from "./Modal/AddProduct";

export const AllProducts = () => {
  const { documents: products } = useFetchDocuments<IProduct>("products");

  return (
    <>
      <section className={styles.section}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <NoCard />
      </section>

      {/* Modals */}
      <AddProduct />
      <UpdateProduct />
      <RemoveProduct />
      {/* /Modals */}
    </>
  );
};
