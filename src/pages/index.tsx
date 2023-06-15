import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  HomeContainer,
  Product,
  ButtonGroup,
  LoadingBox,
  Box,
} from "../styles/pages/home";

import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useContext, useState } from "react";

import arrowLeftImg from "../assets/arrowLeft.svg";
import arrowRightImg from "../assets/arrowRight.svg";
import { CartButton } from "../components/CartButton";
import { CartContext } from "../context/CartContext";
import { priceFormat } from "../utils/priceFormat";
import { Header } from "../components/Header";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { handleAddProduct } = useContext(CartContext);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    slides: {
      origin: "center",
      perView: 2,
      spacing: 48,
    },
    breakpoints: {
      "(max-width: 1366px)": {
        slides: {
          perView: 2.1,
          spacing: 24,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1.1,
          spacing: 12,
        },
      },
    },
  });

  if (products.length === 0) {
    return (
      <HomeContainer ref={sliderRef} className="keen-slider">
        {[...Array(3)].map((i) => (
          <LoadingBox
            key={i}
            className={`keen-slider__slide number-slider${i}`}
          >
            <Box />
            <div>
              <span />
              <span />
            </div>
          </LoadingBox>
        ))}
        {loaded && instanceRef.current && (
          <ButtonGroup>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            >
              <Image src={arrowLeftImg} width={48} height={48} alt="" />
            </button>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details?.slides.length - 1
              }
            >
              <Image src={arrowRightImg} width={48} height={48} alt="" />
            </button>
          </ButtonGroup>
        )}
      </HomeContainer>
    );
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <Header />
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product, index) => (
          <Product
            key={product.id}
            className={`keen-slider__slide number-slider${index}`}
          >
            <Link href={`/product/${product.id}`}>
              <Image src={product.imageUrl} width={520} height={400} alt="" />
            </Link>
            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{priceFormat(Number(product.price))}</span>
              </div>
              <CartButton
                variant="primary"
                onClick={() => handleAddProduct(product)}
              />
            </footer>
          </Product>
        ))}
        {loaded && instanceRef.current && (
          <ButtonGroup>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            >
              <Image src={arrowLeftImg} width={48} height={48} alt="" />
            </button>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            >
              <Image src={arrowRightImg} width={48} height={48} alt="" />
            </button>
          </ButtonGroup>
        )}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
