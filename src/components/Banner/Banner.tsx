import Image from "next/image";

import styles from "./Banner.module.css";
import heroImage from "/public/assets/BannerSite.jpg";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <h1>Sushi Delivery</h1>
        <h2>Sushis sushi</h2>
      </div>

      <div className={styles.containerImage}>
        <Image
          src={heroImage}
          width={1024}
          height={710}
          alt="Seja bem vindo ao sushi delivery"
        />
      </div>
    </div>
  );
};
