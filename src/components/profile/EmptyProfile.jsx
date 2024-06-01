import { Box, Heading, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function EmptyProfile() {
  return (
    <Box m="30px" p="30px" boxShadow="lg">
      <Heading
        as="h2"
        fontSize={{ base: "20px", md: "24px", lg: "28px" }}
        mb="20px"
        color="textColor.100"
      >
        Login to access stats for your account!
      </Heading>
      <SkeletonCircle size="10" startColor="textColor.800" />
      <SkeletonText
        mt="4"
        noOfLines={4}
        spacing="4"
        skeletonHeight="2"
        startColor="textColor.800"
      />
    </Box>
  );
}

export default EmptyProfile;
