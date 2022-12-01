import styles from "./SushiQuantity.module.css";

import { TProduct } from "../../pages/api/hello";
import Image from "next/image";
import { useStepContext } from "../../context/StepContext";
import { Cart } from "../Cart";
import Link from "next/link";

export const SushiQuantity = () => {
  const { cart, total, handleQuantity } = useStepContext();

  return (
    <>
      <div className={styles.container}>
        {cart.map(({ sushi, quantity }) => (
          <div key={sushi._id} className={styles.containerCard}>
            <Image
              priority
              src={sushi.url}
              alt={sushi.name}
              width={222}
              height={192}
            />
            <span>{sushi.name}</span>
            <div className={styles.quantity}>
              <button
                disabled={quantity === 0}
                onClick={() => handleQuantity("SUB", sushi._id)}
              >
                -
              </button>
              <div>{quantity}</div>
              <button onClick={() => handleQuantity("ADD", sushi._id)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.control}>
        <Link href="/Etapa01">
          <button>Voltar</button>
        </Link>
        <Link href="/Etapa03">
          <button disabled={total === 0}>Avançar</button>
        </Link>
      </div>
    </>
  );
};
