import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../assets/components/Navbar";
import Dasboard from "../assets/components/Dasboard";
import BarChart from "../assets/components/Barchart";
import Linechart from "../assets/components/Barchart";
import MainContent from "../assets/components/Main";
import Nav from "../assets/components/Nav";
import Barchart from "../assets/components/Barchart";

function BarChartpage() {
  return (
    <Grid
    templateAreas={`"main main"
                    "nav nav"
                   "chart1 chart1"`}
gridTemplateRows={"70px 50px 600px "}
gridTemplateColumns={"1fr 1fr"}
      h="730px"
      gap="3"
      fontWeight="bold"
    >
      <GridItem area={"chart1"}>
    <Barchart />
    </GridItem>
      <GridItem shadow="base" area={"nav"} bg='#c1c1c1' >
      <Nav children="BarChart" />
      </GridItem>
      <GridItem shadow="base" area={"main"}>
        <MainContent />
    </GridItem>
    
    </Grid>
  );
}

export default BarChartpage;
