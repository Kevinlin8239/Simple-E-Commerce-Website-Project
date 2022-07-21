import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Products";

export default function Home() {
  // fetch the data from backend strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  // check the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Ho noooooo {error.message}</p>;
  const products = data.products.data;
  console.log(products);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello Next.js!</h1>
        {products.map((product, id) => (
          <Product key={id} product={product} />
        ))}
      </main>
    </div>
  );
}
