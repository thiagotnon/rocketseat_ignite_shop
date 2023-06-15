import { ReactNode, createContext, useState } from "react";
import { priceFormat } from "../utils/priceFormat";

export interface ProductProps {
  defaultPriceId: string;
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}
interface CartContextProps {
  cart: ProductProps[];
  handleAddProduct: (product: ProductProps) => void;
  handleOpenCloseCartModal: () => void;
  handleRemoveProduct: (index: number) => void;
  openModal: boolean;
}
export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [openModal, setOpenModal] = useState(false);

  function handleOpenCloseCartModal() {
    setOpenModal((prev) => !prev);
  }

  function handleAddProduct(product: ProductProps) {
    setCart((prev) => [...prev, product]);
  }

  function handleRemoveProduct(index: number) {
    const newProduct = cart.filter((product, i) => i !== index);
    setCart(newProduct);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddProduct,
        handleOpenCloseCartModal,
        openModal,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
