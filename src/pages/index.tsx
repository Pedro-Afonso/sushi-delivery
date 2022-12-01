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
  const data = await fetch(
    "https://api.jsonbin.io/v3/b/63888f2d7966e84526d11b66",
    { method: "GET" }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      products: data.record.products,
    },
  };
};

export default Home;
