import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

import logoImg from "../assets/logo.svg";
import { log } from "console";

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    description: string;
    price: {
      product: {
        images: string[];
      };
    };
  }[];
}
const Success = ({ customerName, products }: SuccessProps) => {
  return (
    <>
      <Head>
        <title>Compra efetuada| Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <Image src={logoImg} alt="" />
        <ImageContainer>
          {products?.map((product) => {
            return (
              <Image
                key={product.id}
                src={product.price.product.images[0]}
                width={120}
                height={110}
                alt=""
              />
            );
          })}
        </ImageContainer>
        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          <strong>
            {" "}
            {`${
              products.length > 1
                ? `${products.length} camisetas`
                : products[0].description
            }`}{" "}
          </strong>
          já {`${products.length > 1 ? "estão" : "está"}`} a caminho da sua
          casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;
  const products = session.line_items.data;

  return {
    props: {
      customerName,
      products,
    },
  };
};
