import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../interface";

import styles from "./SquareCard.module.css";

interface ISquareCardProps {
  product: IProduct;
}

export const SquareCard: React.FC<ISquareCardProps> = ({ product }) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerImage}>
        <Image src={product.url} alt={product.name} width={250} height={250} />
      </div>
      <div className={styles.containerInfo}>
        <h3>{product.name}</h3>
        <p>Ingredientes: {product.ingredients.join(", ")}</p>
        <Link href="/Etapa01">
          <button>PEÇA AGORA</button>
        </Link>
      </div>
    </div>
  );
};
