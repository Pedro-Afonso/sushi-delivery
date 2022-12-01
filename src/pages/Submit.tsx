import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Cart, Footer, Header, HeadPage, Steps } from "../components";
import SubmitImage from "../../public/assets/SubmitImage.svg";
import styles from "../styles/Submit.module.css";

const URL_APP = process.env.URL_BASE;

const Etapa01: NextPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <HeadPage />
      <Header />

      <h2 className={styles.title}>Pedido feito com sucesso!</h2>

      <div className={styles.containerImage}>
        <Image
          priority
          src={SubmitImage}
          width={450}
          height={450}
          alt="Parabéns, você finalizou o pedido!"
        />
      </div>

      <div className={styles.containerSubtitle}>
        <p className={styles.subtitle}>
          O seu pedido foi realizado com sucesso e já está a caminho.
        </p>
      </div>
      <div className={styles.control}>
        <Link href="/">
          <button>Voltar a Página Inicial</button>
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
