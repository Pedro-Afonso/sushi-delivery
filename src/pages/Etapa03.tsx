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

const URL_APP = process.env.NEXT_PUBLIC_API_URL;

const Etapa01: NextPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
