import { useAppDispatch } from "../../../hooks";
import useCloseMenu from "../../../hooks/useCloseMenu";
import {
  toggleAddProduct,
  toggleRemoveProduct,
  toggleUpdateProduct,
} from "../../../slices/modalSlice";
import { CardMenu } from "../../CardMenu";

interface IProductMenuProps {
  toggleMenuHandler: () => void;
}

export const ProductMenu: React.FC<IProductMenuProps> = ({
  toggleMenuHandler,
}) => {
  const menuRef = useCloseMenu(toggleMenuHandler);
  const dispatch = useAppDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleUpdateProduct(null))}>Adicionar</li>
      <li onClick={() => dispatch(toggleRemoveProduct(null))}>Excluir</li>
    </CardMenu>
  );
};
