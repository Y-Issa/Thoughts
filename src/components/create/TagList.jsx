import {
  FormLabel,
  HStack,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";

function TagList({ tags, removeTag }) {
  return (
    <HStack spacing={4} mb="15px" flexWrap="wrap">
      <FormLabel my="10px">Tags:</FormLabel>
      {tags.map((tag) => (
        <>
          <Input type="hidden" name="tags" value={tag} key={`${tag}-hidden`} />
          <Tag key={tag} size="lg" variant="subtle" colorScheme="purple">
            <TagLabel py="5px">{tag}</TagLabel>
            <TagCloseButton onClick={() => removeTag(tag)} />
          </Tag>
        </>
      ))}
    </HStack>
  );
}

export default TagList;
