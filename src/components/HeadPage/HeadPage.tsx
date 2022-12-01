import Head from "next/head";

export const HeadPage = ({ title = "Sushi Delivery" }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta
        name="description"
        content="Serviço de comprar e entrega de sushi"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{`Sushi Delivery - ${title}`}</title>
    </Head>
  );
};
