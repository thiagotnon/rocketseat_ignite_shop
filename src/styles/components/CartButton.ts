import { styled } from "..";

export const CartButtonContainer = styled("button", {
  lineHeight: 0,
  border: 0,
  width: 48,
  height: 48,
  borderRadius: 8,
  cursor: "pointer",
  transition: ".4s",
  position: "relative",

  svg: {
    fill: "$gray300",
    transition: ".4s",
  },

  span: {
    fontSize: 14,
    fontWeight: "bold",
    color: "$white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "$green500",
    borderRadius: "50%",
    width: 24,
    height: 24,
    position: "absolute",
    top: -10,
    right: -10,
    boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.5)",
  },

  "&:hover": {
    background: "$green300",
    svg: {
      fill: "$white",
    },
  },

  variants: {
    variant: {
      primary: {
        background: "$green500",
        svg: {
          fill: "$white",
        },
      },
      secondary: {
        background: "$gray800",
        svg: {
          fill: "$gray300",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
