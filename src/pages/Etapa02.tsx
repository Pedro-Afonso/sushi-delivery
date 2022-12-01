import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

import {
  Cart,
  Footer,
  Header,
  HeadPage,
  Steps,
  SushiQuantity,
} from "../components";
import styles from "../styles/Etapa01.module.css";

const URL_APP = process.env.URL_BASE;

const Etapa01: NextPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <HeadPage />
      <Header />
      <Steps current={2} />
      <h2 className={styles.title}>Selecione a quantidade</h2>
      <Cart />
      <div className={styles.containerSubtitle}>
        <p className={styles.subtitle}>Quantidades</p>
      </div>
      <SushiQuantity products={products} />

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`${URL_APP}/api/hello`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      products: data.products,
    },
  };
};

export default Etapa01;
