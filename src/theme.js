import { theme as origTheme, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Alert: {
      variants: {
        solid: (props) => {
          const { colorScheme: c } = props;
          if (c !== "blue") {
            // use original definition for all color schemes except "blue"
            return origTheme.components.Alert.variants.solid(props);
          }
          return {
            container: {
              bg: "#9F7AEA",
              // bg: `${c}.400`,
            },
          };
        },
      },
    },
  },
});

export default theme;
