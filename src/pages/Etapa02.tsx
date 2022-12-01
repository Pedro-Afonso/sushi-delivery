import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import {
  Cart,
  Footer,
  Header,
  HeadPage,
  Steps,
  SushiQuantity,
} from "../components";
import styles from "../styles/Etapa01.module.css";

const Etapa02: NextPage = () => {
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
      <SushiQuantity />

      <Footer />
    </div>
  );
};

export default Etapa02;
