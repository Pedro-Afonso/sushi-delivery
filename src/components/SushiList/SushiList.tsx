import Image from "next/image";
import Link from "next/link";
import { useStepContext } from "../../context/StepContext";

import { TProduct } from "../../pages/api/hello";
import styles from "./SushiList.module.css";

interface ISushiListProps {
  products: TProduct[];
}

export const SushiList: React.FC<ISushiListProps> = ({ products }) => {
  const { cart, handleCheckSushi } = useStepContext();

  const sushiId = cart.map(({ sushi }) => sushi._id);

  return (
    <>
      <div className={styles.containerProducts}>
        {products.map((sushi) => (
          <div key={sushi._id} className={styles.containerProduct}>
            <label className={styles.containerLabel}>
              <input
                type="checkbox"
                checked={sushiId.includes(sushi._id)}
                onChange={() => handleCheckSushi(sushi)}
              />
              <div className={styles.containerCard}>
                <div className={styles.containerImage}>
                  <Image
                    priority
                    src={sushi.url}
                    alt={sushi.name}
                    width={250}
                    height={250}
                  />
                </div>
                <div className={styles.containerInfo}>
                  <h3>{sushi.name}</h3>
                  <p>Ingredientes: {sushi.ingredients.join(", ")}</p>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className={styles.control}>
        <Link href="/">
          <button>Voltar</button>
        </Link>
        <Link href="/Etapa02">
          <button disabled={cart.length === 0}>Avançar</button>
        </Link>
      </div>
    </>
  );
};
