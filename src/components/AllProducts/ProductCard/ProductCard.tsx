import { HiDotsVertical } from "react-icons/hi";

import { useMenu } from "../../../hooks";
import { ProductMenu } from "../ProductMenu";
import styles from "./ProductCard.module.scss";

interface IProductCardProps {
  product: {
    _id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    ingredients: string[];
  };
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { isVisible, toggleMenuHandler } = useMenu();

  return (
    <>
      <div key={product._id} className={styles.card}>
        <div className={styles.edit}>
          <HiDotsVertical className="icon hover" onClick={toggleMenuHandler} />
          {isVisible && <ProductMenu toggleMenuHandler={toggleMenuHandler} />}
        </div>
        <h2>{product.name}</h2>
      </div>
    </>
  );
};
