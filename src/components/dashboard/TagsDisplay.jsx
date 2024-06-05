import { Box, Flex, Tag, TagLabel } from "@chakra-ui/react";

function TagsDisplay({ tags }) {
  return (
    <Flex
      gap={4}
      wrap="wrap"
      justifyContent={`${tags.length > 4 ? "space-around" : ""}`}
    >
      {tags.length === 0 && (
        <Tag
          size="sm"
          variant="subtle"
          bgColor="bgColor.100"
          color="textColor.100"
          _hover={{ bgColor: "bgColor.200", color: "textColor.200" }}
        >
          <TagLabel py="5px">No tags</TagLabel>
        </Tag>
      )}
      {tags.map((tag, index) => (
        <Box key={`${tag}-${index}`}>
          <Tag
            size="sm"
            variant="subtle"
            bgColor="primary.200"
            color="textColor.100"
          >
            <TagLabel py="5px">{tag}</TagLabel>
          </Tag>
        </Box>
      ))}
    </Flex>
  );
}

export default TagsDisplay;
