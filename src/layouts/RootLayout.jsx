import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="brand.600"
        minH={{ base: "50px", lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
        // position={{ base: "static", lg: "fixed" }}
      >
        <Sidebar />
      </GridItem>

      <GridItem as={"main"} colSpan={{ base: 6, lg: 4, xl: 5 }} p={"40px"}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
