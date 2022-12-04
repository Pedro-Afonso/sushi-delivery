import Image from "next/image";
import React, { useState } from "react";
import { HiCamera } from "react-icons/hi";
import {
  useAppDispatch,
  useAppSelector,
  useFirestore,
  useStorage,
} from "../../../../hooks";
import { toggleAddProduct } from "../../../../slices/modalSlice";
import { Modal } from "../../../Modal";

import emptyImg from "../../../../../public/vercel.svg";

import styles from "../../../Modal/Modal.module.scss";

interface IUploadData {
  name: string;
  price: number;
  description: string;
  ingredients: string[];
  url: string;
}

export const AddProduct = () => {
  const dispatch = useAppDispatch();

  const { uploadImage } = useStorage();

  const { addDocument } = useFirestore("products");

  const { isVisible } = useAppSelector((state) => state.modal.addProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [image, setImage] = useState<File | null>();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (image == null) return;

    const url = await uploadImage(image);

    console.log("url", url);

    if (!url || !name || !price || !description || !ingredient) return;

    const data: IUploadData = {
      name,
      price,
      description,
      ingredients: ingredient.split(","),
      url,
    };

    await addDocument(data);

    setName("");
    setPrice(0);
    setDescription("");
    setIngredient("");
    setImage(null);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddProduct(null))}
      title="Adicionar"
    >
      <form onSubmit={handleSubmit}>
        <div className={styles.uploadImg}>
          <Image
            src={image ? URL.createObjectURL(image) : emptyImg}
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
          <button onClick={() => dispatch(toggleAddProduct(null))}>
            Voltar
          </button>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </Modal>
  );
};
