import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer, Header, HeadPage } from "../components";
import SubmitImage from "../../public/assets/SubmitImage.svg";
import styles from "../styles/Submit.module.css";

const Submit: NextPage = () => {
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

export default Submit;
