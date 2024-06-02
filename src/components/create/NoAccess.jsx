import { Box, Heading, Text } from "@chakra-ui/react";

function NoAccess() {
  return (
    <Box
      m="30px"
      p="30px"
      boxShadow="lg"
      bgColor="bgColor.200"
      borderRadius="6px"
    >
      <Heading
        as="h2"
        fontSize={{ base: "20px", md: "24px", lg: "28px" }}
        mb="20px"
        color="textColor.100"
      >
        Sign in to create an idea.
      </Heading>
      <Text fontSize="16px" color="textColor.100">
        You need to be signed in to start creating! Let the world know about
        your thoughts. 🚀
      </Text>
    </Box>
  );
}

export default NoAccess;
