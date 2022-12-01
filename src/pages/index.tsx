import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";

import { Banner, Footer, Header, HeadPage, ListProducts } from "../components";
import styles from "../styles/Home.module.css";

const URL_APP = process.env.NEXT_PUBLIC_API_URL;

const Home: NextPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <HeadPage />
      <Header />
      <Banner />

      <ListProducts products={products} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`${URL_APP}/api/hello`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      products: data.products,
    },
  };
};

export default Home;
