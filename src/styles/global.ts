import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  "::-webkit-scrollbar": {
    width: 10,
  },

  "::-webkit-scrollbar-track": {
    backgroundColor: "$gray900",
    borderRadius: 2,
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: "$green300",
    borderRadius: 2,
  },

  "::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "$green500",
  },

  "::-ms-scrollbar": {
    width: 10,
  },

  "::-ms-scrollbar-track": {
    backgroundColor: "$gray900",
  },

  "::-ms-scrollbar-thumb": {
    backgroundColor: "$green300",
    borderRadius: 2,
  },

  "::-ms-scrollbar-thumb:hover": {
    backgroundColor: "$green500",
  },
});
