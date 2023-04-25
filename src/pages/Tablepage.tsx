import { Grid, GridItem, Show, Table } from "@chakra-ui/react";
import Dasboard from "../assets/components/Dasboard";
import Piechart from "../assets/components/Piechart";
import tab from "../assets/components/Table";
import Tables from "../assets/components/Table";
import NavBar from "../assets/components/Navbar";
import Nav from "../assets/components/Nav";
import MainContent from "../assets/components/Main";
function PieChartpage() {
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
    <Tables />
    </GridItem>
      <GridItem shadow="base" area={"nav"} bg='#c1c1c1' >
      <Nav children="Table" />
      </GridItem>
      <GridItem shadow="base" area={"main"}>
        <MainContent />
    </GridItem>
    
    </Grid>
  );
}

export default PieChartpage;
