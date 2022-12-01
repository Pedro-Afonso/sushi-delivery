import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";

import { Banner, Footer, Header, HeadPage, ListProducts } from "../components";
import styles from "../styles/Home.module.css";

const URL_APP = process.env.URL_BASE;

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

      {/*  <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/*  <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
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
