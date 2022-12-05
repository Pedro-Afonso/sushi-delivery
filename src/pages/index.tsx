import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";

import { Banner, Footer, Header, HeadPage, ListProducts } from "../components";
import { IProduct } from "../components/interface";
import styles from "../styles/Home.module.css";
import { fetchProducts } from "../utils";

const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
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

export async function getServerSideProps() {
  const products = await fetchProducts();

  return { props: { products } };
}

export default Home;
