import ColormodeSwitch from "../../ColormodeSwitch";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {HiUserCircle } from "react-icons/hi";
const Dasboard = () => {
  return (
    <HStack justifyContent="end" boxSize='1px' >
     
      <ColormodeSwitch />
      
    </HStack>
  );
};

export default Dasboard;
