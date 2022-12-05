import type { NextPage } from "next";
import { collection, getDocs } from "firebase/firestore";

import {
  Cart,
  Footer,
  Header,
  HeadPage,
  Steps,
  SushiList,
} from "../components";
import { IProduct } from "../components/interface";
import styles from "../styles/Etapa01.module.css";
import { db } from "../config/firebase";
import { fetchProducts } from "../utils";

const Etapa01: NextPage<{ products: IProduct[] }> = ({ products }) => {
  /* const { documents: products } = useProducts<IProduct[]>(); */

  return (
    <div className={styles.container}>
      <HeadPage />
      <Header />
      <Steps current={1} />
      <h2 className={styles.title}>Selecione o Sushi</h2>
      <Cart />
      <div className={styles.containerSubtitle}>
        <p className={styles.subtitle}>Sushis</p>
      </div>
      <SushiList products={products} />

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const products = await fetchProducts();

  return { props: { products } };
}

export default Etapa01;
