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

const URL_APP = process.env.NEXT_PUBLIC_API_URL;

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
  const data = await fetch(
    "https://api.jsonbin.io/v3/b/63888f2d7966e84526d11b66",
    { method: "GET" }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      products: data.record.products,
    },
  };
};

export default Etapa01;
