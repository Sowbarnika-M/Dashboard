import { HStack, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

interface Props {
  children: string;
}

const NavBar = ({ children }: Props) => {
  return (
    <HStack justifyContent="centre">
      <Text>{children}</Text>
    </HStack>
  );
};
export default NavBar;
