import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { toggleRemoveProduct } from "../../../../slices/modalSlice";
import { Modal } from "../../../Modal";

export const RemoveProduct = () => {
  const dispatch = useAppDispatch();
  const { isVisible, product } = useAppSelector(
    (state) => state.modal.removeProduct
  );

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleRemoveProduct(null))}
      title="Remover Produto"
    >
      <h1>Teste</h1>
    </Modal>
  );
};
