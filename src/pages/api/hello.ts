// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type TProduct = {
  _id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  ingredients: string[];
};

export type TProductsData = {
  products: TProduct[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TProductsData>
) {
  /* Fetch Database */
  const DB = [
    {
      _id: 1,
      name: "Niguiri",
      price: 2,
      url: "https://res.cloudinary.com/drjnirfci/image/upload/v1669732837/sushi-delivery/Niguiri_ajlok3.webp",
      description:
        "O nigiri é um prato típico nas receitas japonesas, modelado com as mãos em forma de bolinho. O seu preparo leva um pouco de wasabi. Sua cobertura é tradicionalmente é feita com fina fatia de salmão.",
      ingredients: ["Lâmina de Salmão", "Lâmina de Robalo", "Kani", "Camarão"],
    },
    {
      _id: 2,
      name: "Huramaki",
      price: 2,
      url: "https://res.cloudinary.com/drjnirfci/image/upload/v1669732837/sushi-delivery/Huramaki_aas0xq.webp",
      description:
        "Huramaki significa 'enrolado ao contrário'. Uramaki diferencia-se dos outros maki porque o arroz está na parte externa e o nori na interna. O recheio fica no centro, rodeado por uma camada de nori, uma camada de arroz e uma cobertura de outro ingrediente.",
      ingredients: ["Nori", "Kani", "Recheio"],
    },
    {
      _id: 3,
      name: "Hosomaki",
      price: 2,
      url: "https://res.cloudinary.com/drjnirfci/image/upload/v1669732837/sushi-delivery/Hosomaki_binby3.webp",
      description:
        "Hossomaki é o sushi enrolado em rolos finos com alga por fora. Por serem pequenos, costumam levar apenas um ingrediente no recheio.",
      ingredients: ["Nori", "Kani", "Recheio"],
    },
    {
      _id: 4,
      name: "Sashimi",
      price: 2,
      url: "https://res.cloudinary.com/drjnirfci/image/upload/v1669732837/sushi-delivery/Sashimi_scosmo.webp",
      description:
        "O sashimi é um pedaço de peixe cru que pode ser consumido com molho shoyo ou wasabi.",
      ingredients: ["Lâmina de Salmão", "Robalo", "Salmão Negro"],
    },
  ];

  /* /Fetch Database */

  res.status(200).json({ products: DB });
}
