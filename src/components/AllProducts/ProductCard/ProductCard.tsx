import { HiDotsVertical } from "react-icons/hi";

import { ProductMenu } from "../ProductMenu";
import { IProduct } from "../../interface";
import { useMenu } from "../../../hooks";

import styles from "./ProductCard.module.scss";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { isVisible, toggleMenuHandler } = useMenu();

  return (
    <>
      <div key={product.id} className={styles.card}>
        <div className={styles.edit}>
          <HiDotsVertical className="icon hover" onClick={toggleMenuHandler} />
          {isVisible && <ProductMenu toggleMenuHandler={toggleMenuHandler} />}
        </div>
        <h2>{product.name}</h2>
      </div>
    </>
  );
};
