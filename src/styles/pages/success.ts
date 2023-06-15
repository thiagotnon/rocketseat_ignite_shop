import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  "&>img": {
    marginBottom: 104,
  },

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 52,
  marginBottom: 42,

  img: {
    objectFit: "cover",
    width: 140,
    height: 140,
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: "50%",
    padding: "0.25rem",
    marginLeft: -52,
    boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
  },
});