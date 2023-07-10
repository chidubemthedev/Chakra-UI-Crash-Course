import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

const Navbar = () => {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
      icon: <UnlockIcon/>
    })
  }
  return (
    // <Flex bg={"gray.200"} justify={"space-between"} wrap={"wrap"} gap={"2"}>
    //     <Box w={"150px"} h={"50px"} bg={"red"}>1</Box>
    //     <Box w={"150px"} h={"50px"} bg={"blue"}>2</Box>
    //     <Box w={"150px"} h={"50px"} flexGrow={"1"} bg={"green"}>3</Box>
    //     <Box w={"150px"} h={"50px"} flexGrow={"2"} bg={"yellow"}>4</Box>
    // </Flex>
    <Flex as={"nav"} p={"10px"} alignItems={"center"} mb="40px">
      <Heading as={"h1"}>Chakra UI</Heading>
      <Spacer />

      <HStack spacing={"20px"}>
        <Avatar src="/img/mario.png" name="mario" bg="purple.400">
          <AvatarBadge w="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>chukwudubem7@gmail.com</Text>
        <Button onClick={showToast} colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
