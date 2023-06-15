import Link from "next/link";
import { HeaderContainer } from "../styles/components/Header";
import Image from "next/image";
import { CartButton } from "./CartButton";
import logoImg from "../assets/logo.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Header = () => {
  const { cart, handleOpenCloseCartModal } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <CartButton variant="secondary" onClick={handleOpenCloseCartModal}>
        {cart.length > 0 && <span>{cart?.length}</span>}
      </CartButton>
    </HeaderContainer>
  );
};
