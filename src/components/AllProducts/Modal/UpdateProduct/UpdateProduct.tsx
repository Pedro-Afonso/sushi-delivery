import { useEffect, useState } from "react";
import Image from "next/image";

import { HiCamera } from "react-icons/hi";
import {
  useAppDispatch,
  useAppSelector,
  useFirestore,
  useStorage,
} from "../../../../hooks";
import { toggleUpdateProduct } from "../../../../slices/modalSlice";
import emptyImg from "../../../../../public/empty.png";
import styles from "../../../Modal/Modal.module.scss";
import { Modal } from "../../../Modal";

interface IUploadData {
  name: string;
  price: number;
  description: string;
  ingredients: string[];
  url?: string;
}

export const UpdateProduct = () => {
  const dispatch = useAppDispatch();
  const { isVisible, product } = useAppSelector(
    (state) => state.modal.updateProduct
  );

  const { updateDocument } = useFirestore("products");
  const { uploadImage } = useStorage();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [image, setImage] = useState<File | null>();

  useEffect(() => {
    setName(product?.name || "");
    setPrice(product?.price || 0);
    setDescription(product?.description || "");
    setIngredient(product?.ingredients.join(", ") || "");
  }, [product]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const url = file && URL.createObjectURL(file);
    setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !price || !description || !ingredient || !product) return;

    let data: IUploadData = {
      name,
      price,
      description,
      ingredients: ingredient.split(","),
    };

    if (image) {
      const url = await uploadImage(image);
      data.url = url;
    }

    await updateDocument(product.id, data);

    setName("");
    setPrice(0);
    setDescription("");
    setIngredient("");
    setImage(null);
    dispatch(toggleUpdateProduct(null));
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleUpdateProduct(null))}
      title="Atualizar Produto"
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.uploadImg}>
          <Image
            src={
              image
                ? URL.createObjectURL(image)
                : product
                ? product.url
                : emptyImg
            }
            alt="Pré-vizualização do produto"
            width={150}
            height={150}
          />
          <label htmlFor="uploadImg">
            <HiCamera />
          </label>
          <input
            id="uploadImg"
            accept="image/*"
            type="file"
            onChange={handleFile}
            hidden
          />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="ingredient">Ingredientes</label>
          <input
            id="ingredient"
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="description">Descrição</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="price">Preço</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className={styles.control}>
          <button
            type="button"
            onClick={() => dispatch(toggleUpdateProduct(null))}
          >
            Voltar
          </button>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </Modal>
  );
};
