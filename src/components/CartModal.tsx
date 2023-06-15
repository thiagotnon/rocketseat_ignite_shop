import Image from "next/image";
import {
  CartModalCloseButton,
  CartModalContainer,
  CartModalFooter,
  CartTotal,
  CartQuantity,
  ImageContainer,
  ProductInfo,
  ProductCartList,
  ProductCart,
  ProductCartContainer,
} from "../styles/components/CartModal";

import closeImg from "../assets/close.svg";
import { Button } from "./Button";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { priceFormat } from "../utils/priceFormat";
import axios from "axios";

export const CartModal = () => {
  const { cart, openModal, handleOpenCloseCartModal, handleRemoveProduct } =
    useContext(CartContext);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const lineItems = cart.map((product) => {
        return {
          price: product.defaultPriceId,
          quantity: 1,
        };
      });
      console.log(lineItems);

      const response = await axios.post("/api/checkout", {
        lineItems,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);

      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }

  const total = cart.reduce((acc, product) => {
    return ((acc += Number(product.price)) * 100) / 100;
  }, 0);

  return (
    <CartModalContainer open={openModal}>
      <CartModalCloseButton onClick={handleOpenCloseCartModal}>
        <Image src={closeImg} width={24} height={24} alt="" />
      </CartModalCloseButton>
      <h3>Sacola de compras</h3>
      <ProductCartContainer>
        <ProductCartList>
          {cart.map((product, index) => {
            return (
              <ProductCart key={index}>
                <ImageContainer>
                  <Image src={product.imageUrl} width={90} height={90} alt="" />
                </ImageContainer>
                <ProductInfo>
                  <h3>{product.name}</h3>
                  <strong>{priceFormat(Number(product.price))}</strong>
                  <button onClick={() => handleRemoveProduct(index)}>
                    Remover
                  </button>
                </ProductInfo>
              </ProductCart>
            );
          })}
        </ProductCartList>
      </ProductCartContainer>
      <CartModalFooter>
        <CartQuantity>
          <span>Quantidade</span>
          <span>{cart.length}</span>
        </CartQuantity>
        <CartTotal>
          <span>Valor total</span>
          <span>{priceFormat(total)}</span>
        </CartTotal>

        <Button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
          Finalizar compra
        </Button>
      </CartModalFooter>
    </CartModalContainer>
  );
};
