import styles from "./SushiQuantity.module.css";

import { TProduct } from "../../pages/api/hello";
import Image from "next/image";
import { useStepContext } from "../../context/StepContext";
import { Cart } from "../Cart";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import { handleQuantity } from "../../slices/stepSlice";

export const SushiQuantity = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.step.cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.product.price * item.quantity));
    setTotal(sum);
  }, [cart]);

  return (
    <>
      <div className={styles.container}>
        {cart.map(({ product, quantity }) => (
          <div key={product.id} className={styles.containerCard}>
            <Image
              priority
              src={product.url}
              alt={product.name}
              width={222}
              height={192}
            />
            <span>{product.name}</span>
            <div className={styles.quantity}>
              <button
                disabled={quantity === 0}
                onClick={() =>
                  dispatch(handleQuantity({ opt: "SUB", id: product.id }))
                }
              >
                -
              </button>
              <div>{quantity}</div>
              <button
                onClick={() =>
                  dispatch(handleQuantity({ opt: "ADD", id: product.id }))
                }
              >
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
