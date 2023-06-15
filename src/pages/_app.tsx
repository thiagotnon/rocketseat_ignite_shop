import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";

import { CartModal } from "../components/CartModal";
import { CartProvider } from "../context/CartContext";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
      <CartModal />
    </CartProvider>
  );
}
