import { TProductsData } from "../../pages/api/hello";
import { SquareCard } from "../SquareCard";
import styles from "./ListProducts.module.css";

type IListProductsProps = TProductsData;

export const ListProducts: React.FC<IListProductsProps> = ({ products }) => {
  return (
    <>
      <div className={styles.containerCards}>
        <div className={styles.containerText}>
          <h2>Peça o seu sushi online agora!</h2>
          <p>
            Aproveite a nossa promoção! Comprando 50 peças hoje, você paga
            apenas R&#36;59,99 e acumula pontos para a próxima compra. Quantos
            mais pontos você acumular, maior será o desconto na próxima compra.
          </p>
        </div>
        {products.map((product) => (
          <SquareCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
