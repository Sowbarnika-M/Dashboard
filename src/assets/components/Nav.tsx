import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "../../ColormodeSwitch";

interface Props {
  children: string;
}


const Nav = ({children} : Props) => {
  return (
    <HStack justifyContent="space-between" padding="5px">
      <Text> </Text>
      <Text>{children}</Text>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Nav;
