import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NoUserPostsYet() {
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
        Nothing found.
      </Heading>
      <Text fontSize="16px" color="textColor.200">
        You still haven't created any posts.
        <Button
          as={Link}
          to="/create"
          color="primary.300"
          ml="5px"
          variant="link"
        >
          Create your first post
        </Button>{" "}
        and share your thoughts with the world! 🚀
      </Text>
    </Box>
  );
}

export default NoUserPostsYet;
