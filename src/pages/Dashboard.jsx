import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Container as={"section"} maxWidth={"4xl"} py={"20px"}>
      <Heading my={"30px"} p={"10px"}>Chakra UI components</Heading>
      <Text ml={"30px"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
        fuga?
      </Text>
      <Text ml={"30px"} color={"blue.400"} fontWeight={"bold"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
        fuga?
      </Text>

      <Box my={"30px"} p={"20px"} bg={"orange"}>
        <Text color={"white"}>This is a box.</Text>
      </Box>

      <Box>
        Hello.
      </Box>
    </Container>
  );
}
