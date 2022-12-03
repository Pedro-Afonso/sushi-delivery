import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { toggleUpdateProduct } from "../../../../slices/modalSlice";
import { Modal } from "../../../Modal";

export const UpdateProduct = () => {
  const dispatch = useAppDispatch();
  const { isVisible, product } = useAppSelector(
    (state) => state.modal.updateProduct
  );

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleUpdateProduct(null))}
      title="Atualizar Produto"
    >
      <h1>Teste</h1>
    </Modal>
  );
};
