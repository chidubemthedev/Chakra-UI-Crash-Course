import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    // <Flex bg={"gray.200"} justify={"space-between"} wrap={"wrap"} gap={"2"}>
    //     <Box w={"150px"} h={"50px"} bg={"red"}>1</Box>
    //     <Box w={"150px"} h={"50px"} bg={"blue"}>2</Box>
    //     <Box w={"150px"} h={"50px"} flexGrow={"1"} bg={"green"}>3</Box>
    //     <Box w={"150px"} h={"50px"} flexGrow={"2"} bg={"yellow"}>4</Box>
    // </Flex>
    <Flex as={"nav"} p={"10px"} alignItems={"center"}>
      <Heading as={"h1"}>Chakra UI</Heading>
      <Spacer />

      <HStack spacing={"20px"}>
        <Box bg={"gray.200"} p={"10px"}>A</Box>
        <Text>chukwudubem7@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
