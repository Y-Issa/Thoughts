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

function CreateForm({
  tags,
  currentTag,
  setCurrentTag,
  addTag,
  removeTag,
  maxW,
}) {
  return (
    <Box maxW={maxW} color="textColor.100">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input
            type="text"
            name="title"
            placeholder="Task name"
            focusBorderColor="primary.400"
            borderColor="textColor.800"
          />
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter a detailed description for the task..."
            focusBorderColor="primary.400"
            borderColor="textColor.800"
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

        <Button color="textColor.400" bgColor="bgColor.400" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export default CreateForm;
