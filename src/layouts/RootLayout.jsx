import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../navigation/Sidebar";
import { useDarkMode } from "../contexts/DarkModeContext";

function RootLayout() {
  const { isDark } = useDarkMode();

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        display={{ base: "none", md: "block" }}
        colSpan={{ md: 2, lg: 2, xl: 1 }}
        bg={isDark ? "bgColor.50" : "bgColor.200"}
        minHeight={{ md: "100vh" }}
        p={{ base: "20px", lg: "40px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem
        as="main"
        colSpan={{ base: 6, md: 4, lg: 4, xl: 5 }}
        px="5px"
        py="25px"
        bg="bgColor.100"
        h={{ base: "100vh", md: "auto" }}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
