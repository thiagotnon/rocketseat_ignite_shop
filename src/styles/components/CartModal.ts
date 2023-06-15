import { styled } from "..";

export const CartModalContainer = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: 480,
  height: "100vh",
  background: "$gray800",
  padding: 48,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transform: "translateX(100%)",
  transition: "transform .4s cubic-bezier(0.4, 0, 0.2, 1)",
  zIndex: 9,

  variants: {
    open: {
      true: {
        boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8);",
        transform: "translateX(0)",
      },
    },
  },
});
export const CartModalCloseButton = styled("button", {
  position: "absolute",
  top: 24,
  right: 24,
  lineHeight: 0,
  border: 0,
  background: "transparent",
  cursor: "pointer",
});

export const ProductCartContainer = styled("div", {
  height: "calc(80vh - 100px)",
  overflow: "auto",
  margin: "1rem 0",
});
export const ProductCartList = styled("ul", {
  padding: "1rem 0",
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: 24,
});
export const ProductCart = styled("li", {
  display: "grid",
  gridTemplateColumns: "100px auto",
  gap: 20,
});

export const ProductInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: ".5rem 0",
  h3: {
    fontSize: 18,
    color: "$gray300",
  },
  strong: {
    fontSize: 18,
    fontWeight: "700",
    color: "$gray200",
  },
  button: {
    background: "transparent",
    border: 0,
    color: "$green500",
    fontWeight: 700,
    cursor: "pointer",
    padding: ".5rem 0",
  },
});

export const ImageContainer = styled("div", {
  maxWidth: 100,
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
});

export const CartModalFooter = styled("footer", {
  button: {
    width: "100%",
  },
});

export const CartQuantity = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  span: {
    fontSize: 16,
    "&:last-of-type": {
      fontSize: 18,
    },
  },
});
export const CartTotal = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0",
  fontWeight: 700,

  span: {
    fontSize: 18,
    "&:last-of-type": {
      fontSize: 24,
    },
  },
});
