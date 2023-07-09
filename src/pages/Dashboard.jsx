import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    _hover: {
      filter: "blur(0px)",
      bg:"blue.400"
    },
  }

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

      <Box sx={boxStyles}>
        Hello.
        <Button ml={"10px"}>Click me</Button>
      </Box>
    </Container>
  );
}
