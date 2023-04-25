import { Grid, GridItem, Show } from "@chakra-ui/react";

import BarChart from "../assets/components/Barchart";
import MyResponsivePie from "../assets/components/Piechart";
import MainContent from "../assets/components/Main";
import Dasboard from "../assets/components/Dasboard";
import NavBar from "../assets/components/Navbar";
import Nav from "../assets/components/Nav";

function Mainpage() {
  return (
    <Grid
      templateAreas={`"main main"
                  "nav nav"
                  "chart1 chart2"`}
      gridTemplateRows={"70px 50px 600px "}
      gridTemplateColumns={"1fr 1fr"}
      h="730px"
      gap="3"
      fontWeight="bold"
    >
       <GridItem shadow="dark-lg" area={"chart1"}>
        <MyResponsivePie />
        
      </GridItem>
      <GridItem shadow='base' area={"nav" } bg='#c1c1c1'>
        <Nav children='Dashboard'/>
      </GridItem>
      <GridItem shadow='base' area={"main"}>
        <MainContent />
      </GridItem>
      
      
      
      <GridItem shadow="dark-lg" area={"chart2"}>
        <BarChart />
      </GridItem>
     
    </Grid>
  );
}

export default Mainpage;
