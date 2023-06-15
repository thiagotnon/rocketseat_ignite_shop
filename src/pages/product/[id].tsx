import React, { useContext, useState } from "react";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { Button } from "../../components/Button";
import { CartContext } from "../../context/CartContext";
import { priceFormat } from "../../utils/priceFormat";
import axios from "axios";
import { Header } from "../../components/Header";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const { handleAddProduct } = useContext(CartContext);

  const { isFallback } = useRouter();
  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  const productToCart = {
    id: product.id,
    imageUrl: product.imageUrl,
    name: product.name,
    price: product.price,
    defaultPriceId: product.defaultPriceId,
  };

  async function handleBuyProduct() {
    try {
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      alert("Falha ao redirecionar ao checkout");
    }
  }
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <Header />
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormat(Number(product.price))}</span>
          <p>{product.description}</p>
          <Button onClick={() => handleAddProduct(productToCart)}>
            Colocar na sacola
          </Button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "" },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 + 1,
  };
};
