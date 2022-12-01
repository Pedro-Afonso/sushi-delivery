import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

import {
  Cart,
  Footer,
  Header,
  HeadPage,
  Steps,
  Confirmation,
} from "../components";
import styles from "../styles/Etapa03.module.css";

const Etapa03: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadPage />
      <Header />
      <Steps current={3} />
      <h2 className={styles.title}>Confirmar Envio do Pedido</h2>
      <Cart />
      <div className={styles.containerSubtitle}>
        <p className={styles.subtitle}>Resumo do Pedido</p>
      </div>
      <Confirmation />
      <div className={styles.control}>
        <Link href="/Etapa02">
          <button>Voltar</button>
        </Link>
        <Link href="/Submit">
          <button>Enviar</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Etapa03;
