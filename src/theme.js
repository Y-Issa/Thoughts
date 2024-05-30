import { extendTheme } from "@chakra-ui/react";

const alert = {
  variants: {
    solid: () => {
      return {
        container: {
          bg: "primary.400",
        },
      };
    },
  },
};

export const theme_light = extendTheme({
  components: {
    Alert: alert,
  },
  colors: {
    primary: {
      50: "#f3e7ff",
      100: "#dabfff",
      200: "#c1a7ff",
      300: "#a88fff",
      400: "#8f77ff",
      500: "#755fff",
      600: "#5c47ff",
      700: "#432fff",
      800: "#2917ff",
      900: "#0d00ff",
    },
    bgColor: {
      50: "#ffffff",
      100: "#f5f5f5",
      200: "#e1e1e1",
      300: "#d7d7d7",
      400: "#cdcdcd",
    },
    textColor: {
      50: "#0d0d0d", // Almost black
      100: "#1a1a1a", // Very dark gray
      200: "#333333", // Dark gray
      300: "#4d4d4d", // Medium dark gray
      400: "#666666", // Medium gray
      500: "#808080", // Neutral gray
      600: "#999999", // Light gray
      700: "#b3b3b3", // Lighter gray
      800: "#cccccc", // Very light gray
      900: "#e6e6e6", // Near white
    },
  },
});
export const theme_dark = extendTheme({
  components: {
    Alert: alert,
  },
  colors: {
    primary: {
      50: "#d3bfff",
      100: "#b399ff",
      200: "#9373ff",
      300: "#744dff",
      400: "#5527ff",
      500: "#3601ff",
      600: "#2b00cc",
      700: "#210099",
      800: "#160066",
      900: "#0b0033",
    },
    bgColor: {
      50: "#1a1a1a",
      100: "#333333",
      200: "#4d4d4d",
      300: "#666666",
      400: "#808080",
    },
    textColor: {
      50: "#ffffff", // White
      100: "#f5f5f5", // Very light gray
      200: "#e1e1e1", // Light gray
      300: "#d7d7d7", // Light-medium gray
      400: "#cdcdcd", // Medium gray
      500: "#b3b3b3", // Medium-dark gray
      600: "#999999", // Dark gray
      700: "#666666", // Very dark gray
      800: "#4d4d4d", // Near black
      900: "#333333", // Almost black
    },
  },
});
