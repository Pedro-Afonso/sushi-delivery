import { HiDotsVertical } from "react-icons/hi";

import { ProductMenu } from "../ProductMenu";
import { IProduct } from "../../interface";
import { useMenu } from "../../../hooks";

import styles from "./ProductCard.module.scss";
import { getCurrency } from "../../../utils";
import Image from "next/image";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { isVisible, toggleMenuHandler } = useMenu();

  const price = getCurrency(product.price);

  return (
    <div key={product.id} className={styles.card}>
      <div className={styles.edit}>
        <HiDotsVertical className="icon hover" onClick={toggleMenuHandler} />
        {isVisible && (
          <ProductMenu data={product} toggleMenuHandler={toggleMenuHandler} />
        )}
      </div>
      <Image
        priority
        src={product.url}
        alt={product.name}
        width={100}
        height={100}
      />
      <h2>{product.name}</h2>
      <p>
        <label>Preço: </label>
        {price}
      </p>
      <p>
        <label>Descrição: </label>
        {product.description}
      </p>
      <p>
        <label>Ingredientes: </label>
        {product.ingredients.join(", ")}
      </p>
    </div>
  );
};
