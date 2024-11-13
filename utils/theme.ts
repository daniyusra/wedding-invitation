import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "blackAlpha.100",
        color: "black",
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          borderRadius: 12,
          px: 6,
          fontWeight: 400,
          fontSize: "md",
          bg: props.colorMode === "dark" ? "#50657F" : "#50657F",
          color: props.colorMode === "dark" ? "white" : "white",
          _hover: {
            bg: props.colorMode === "dark" ? "#50657F" : "#50657F",
            color: props.colorMode === "dark" ? "white" : "white",
          },
        }),
      },
    },
  },
});

export default theme;
