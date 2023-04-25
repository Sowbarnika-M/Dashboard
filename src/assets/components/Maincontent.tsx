import { HStack, Icon, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { HiUserCircle } from "react-icons/hi";
import Nav from "./Nav";

const MainContent = () => {
  return (

    <HStack justifyContent="space-between" padding="10px">
       <Sidebar />
       <Nav children="Dashboard" />
      <Text>UserName</Text>
      <Icon boxSize="10vh">
        <HiUserCircle />
      </Icon>
    </HStack>
  );
};

export default MainContent;
