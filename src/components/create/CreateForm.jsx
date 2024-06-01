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
import { useState } from "react";

function CreateForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  function addTag() {
    if (currentTag === "" || currentTag.trim(" ") === "") {
      setCurrentTag("");
      return;
    }
    setTags([...tags, currentTag]);
    setCurrentTag("");
  }
  function removeTag(tag) {
    setTags(tags.filter((t) => t !== tag));
  }
  return (
    <Box maxW="450px" color="textColor.100" px="20px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input
            type="text"
            name="title"
            placeholder="Task name"
            focusBorderColor="primary.400"
            borderColor="textColor.800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter a detailed description for the task..."
            focusBorderColor="primary.400"
            borderColor="textColor.800"
            maxH="140px"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
