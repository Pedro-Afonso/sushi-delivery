import Image from "next/image";
import Link from "next/link";
import { useStepContext } from "../../context/StepContext";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { handleSelectProduct } from "../../slices/stepSlice";
import { IProduct } from "../interface";

import styles from "./SushiList.module.css";

interface ISushiListProps {
  products: IProduct[];
}

export const SushiList: React.FC<ISushiListProps> = ({ products }) => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.step.cart);

  const productIdList = cart.map(({ product }) => product.id);

  return (
    <>
      <div className={styles.containerProducts}>
        {products.map((product) => (
          <div key={product.id} className={styles.containerProduct}>
            <label className={styles.containerLabel}>
              <input
                type="checkbox"
                checked={productIdList.includes(product.id)}
                onChange={() => dispatch(handleSelectProduct(product))}
              />
              <div className={styles.containerCard}>
                <div className={styles.containerImage}>
                  <Image
                    priority
                    src={product.url}
                    alt={product.name}
                    width={250}
                    height={250}
                  />
                </div>
                <div className={styles.containerInfo}>
                  <h3>{product.name}</h3>
                  <p>Ingredientes: {product.ingredients.join(", ")}</p>
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
