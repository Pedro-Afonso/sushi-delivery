import styles from "./AllProducts.module.scss";
import db from "../../../db.json";
import { CardMenu } from "../CardMenu";
import { useEffect, useState } from "react";
import { ProductMenu } from "./ProductMenu";
import useCloseMenu from "../../hooks/useCloseMenu";
import { useMenu } from "../../hooks/useMenu";
import { ProductCard } from "./ProductCard";

export const AllProducts = () => {
  const { products } = db;

  return (
    <>
      <section className={styles.section}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </>
  );
};
