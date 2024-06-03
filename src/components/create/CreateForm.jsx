import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

import CreateTagInput from "./CreateTagInput";
import TagList from "./TagList";

import useCreateIdea from "../../hooks/useCreateIdea";

function CreateForm() {
  const {
    title,
    setTitle,
    description,
    setDescription,
    tags,
    currentTag,
    setCurrentTag,
    handleSubmit,
    addTag,
    removeTag,
    isLoading,
  } = useCreateIdea();

  return (
    <Box maxW="450px" color="textColor.100" px="20px">
      <Form onSubmit={handleSubmit}>
        <FormControl mb="40px">
          <FormLabel>Idea:</FormLabel>
          <Input
            type="text"
            name="idea"
            placeholder="Idea name"
            focusBorderColor="primary.400"
            borderColor="textColor.800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
          />
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Idea description:</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter a detailed description for the idea..."
            focusBorderColor="primary.400"
            borderColor="textColor.800"
            maxH="140px"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isRequired
          />
        </FormControl>

        <FormControl mb="30px">
          <TagList tags={tags} removeTag={removeTag} />
          <CreateTagInput
            currentTag={currentTag}
            setCurrentTag={setCurrentTag}
            addTag={addTag}
          />
        </FormControl>

        <Button
          disabled={isLoading}
          color="textColor.400"
          bgColor="bgColor.400"
          type="submit"
          _hover={{ bgColor: "bgColor.300" }}
        >
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export default CreateForm;
