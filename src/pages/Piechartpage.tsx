import { Grid, GridItem, Show } from "@chakra-ui/react";
import Piechart from "../assets/components/Piechart";
import MainContent from "../assets/components/Main";
import Nav from "../assets/components/Nav";

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
    <Piechart />
    </GridItem>
      <GridItem shadow="base" area={"nav"} bg='#c1c1c1' >
      <Nav children="PieChart" />
      </GridItem>
      <GridItem shadow="base" area={"main"}>
        <MainContent />
    </GridItem>
    
    </Grid>
  );
}

export default PieChartpage;
