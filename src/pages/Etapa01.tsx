import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import db from "../../db.json";
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

const Etapa01: NextPage = () => {
  const { products } = db as { products: IProduct[] };

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

export default Etapa01;
