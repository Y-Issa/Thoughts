import { Button, HStack, Input } from "@chakra-ui/react";

function CreateTagInput({ currentTag, setCurrentTag, addTag }) {
  return (
    <HStack spacing={4} mb="20px">
      <Input
        type="text"
        placeholder="Add tags..."
        focusBorderColor="primary.400"
        borderColor="textColor.800"
        value={currentTag}
        onChange={(e) => setCurrentTag(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addTag();
          }
        }}
      />
      <Button bgColor="primary.400" color="white" onClick={addTag}>
        Add tag
      </Button>
    </HStack>
  );
}

export default CreateTagInput;
