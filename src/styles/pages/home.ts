import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    div: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      strong: {
        fontSize: "$lg",
        color: "$gray100",
      },

      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const ButtonGroup = styled("div", {
  width: "100%",
  button: {
    border: 0,
    color: "$white",
    cursor: "pointer",
    position: "absolute",
    zIndex: 9,
    height: "100%",

    img: {
      lineHeight: 0,
    },

    "&:disabled": {
      display: "none",
    },

    "&:first-child": {
      paddingRight: 40,
      left: 0,
      background:
        "linear-gradient(270deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
    },
    "&:last-child": {
      paddingLeft: 40,
      right: 0,
      background:
        "linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
    },
  },
});

export const LoadingBox = styled("div", {
  width: "100%",
  height: 656,
  borderRadius: 8,
  overflow: "hidden",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    span: {
      borderRadius: 8,
      background: "$gray800",
      height: 32,
      width: 200,

      "&:first-child": {
        width: "100%",
        maxWidth: 330,
      },
      "&:last-child": {
        width: "100%",
        maxWidth: 100,
      },
    },
  },
});

export const Box = styled("div", {
  width: "100%",
  height: 598,
  background: "$gray800",
  borderRadius: 8,
  marginBottom: 24,
});
