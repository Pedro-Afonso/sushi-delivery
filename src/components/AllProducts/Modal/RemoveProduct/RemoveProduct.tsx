import {
  useAppDispatch,
  useAppSelector,
  useFirestore,
} from "../../../../hooks";
import { toggleRemoveProduct } from "../../../../slices/modalSlice";
import { Modal } from "../../../Modal";

import styles from "../../../Modal/Modal.module.scss";

export const RemoveProduct = () => {
  const dispatch = useAppDispatch();
  const { isVisible, product } = useAppSelector(
    (state) => state.modal.removeProduct
  );

  const { deleteDocument } = useFirestore("products");

  const handleDelete = async () => {
    if (!product) return;

    await deleteDocument(product.id);

    dispatch(toggleRemoveProduct(null));
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleRemoveProduct(null))}
      title="Remover Produto"
    >
      <p className="h2">{`Você tem certeza que deseja remover ${product?.name}`}</p>
      <div className={styles.control}>
        <button onClick={() => dispatch(toggleRemoveProduct(null))}>
          Cancelar
        </button>
        <button onClick={handleDelete}>Remover</button>
      </div>
    </Modal>
  );
};
