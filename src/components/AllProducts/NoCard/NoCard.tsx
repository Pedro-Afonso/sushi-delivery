import { useAppDispatch } from "../../../hooks";
import { toggleAddProduct } from "../../../slices/modalSlice";
import { TbPlus } from "react-icons/tb";

import styles from "./NoCard.module.scss";

export const NoCard = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={styles.noCard}
      onClick={() => dispatch(toggleAddProduct(null))}
    >
      <TbPlus className="icon" />
    </div>
  );
};
