import { useAppDispatch } from "../../../hooks";
import useCloseMenu from "../../../hooks/useCloseMenu";
import {
  toggleAddProduct,
  toggleRemoveProduct,
  toggleUpdateProduct,
} from "../../../slices/modalSlice";
import { CardMenu } from "../../CardMenu";
import { IProduct } from "../../interface";

interface IProductMenuProps {
  toggleMenuHandler: () => void;
  data: IProduct | null;
}

export const ProductMenu: React.FC<IProductMenuProps> = ({
  toggleMenuHandler,
  data = null,
}) => {
  const menuRef = useCloseMenu(toggleMenuHandler);
  const dispatch = useAppDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleUpdateProduct(data))}>Editar</li>
      <li onClick={() => dispatch(toggleRemoveProduct(data))}>Excluir</li>
    </CardMenu>
  );
};
