import { HStack, Icon, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { HiUserCircle } from "react-icons/hi";

const MainContent = () => {
  return (
    <HStack justifyContent="space-between" padding='4px'>
      <Sidebar />
     
      <HStack padding="4px">
        <Text>UserName</Text>
        <Icon boxSize="10vh">
          <HiUserCircle />
        </Icon>
      </HStack>
    </HStack>
  );
};

export default MainContent;
