import { Box, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function NoContent() {
  const { isLoggedIn } = useAuth();
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
        No content found.
      </Heading>
      <Text fontSize="16px" color="textColor.100">
        Be the first to create an idea!{" "}
        {!isLoggedIn && "Sign up to get started and share your ideas."} 🚀
      </Text>
    </Box>
  );
}

export default NoContent;
