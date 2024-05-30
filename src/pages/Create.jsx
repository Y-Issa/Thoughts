import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";

function Create() {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  function addTag() {
    if (!currentTag) return;
    setTags([...tags, currentTag]);
    setCurrentTag("");
  }
  function removeTag(tag) {
    setTags(tags.filter((t) => t !== tag));
  }

  return (
    <Box maxW="480px" color="textColor.50">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input
            type="text"
            name="title"
            placeholder="Task name"
            focusBorderColor="primary.400"
            borderColor={"textColor.800"}
          />
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter a detailed description for the task..."
            focusBorderColor="primary.400"
            borderColor={"textColor.800"}
          />
        </FormControl>

        <FormControl mb="30px">
          <HStack spacing={4} mb="15px" flexWrap="wrap">
            <FormLabel my="10px">Tags:</FormLabel>
            {tags.map((tag) => (
              <>
                <Input
                  type="hidden"
                  name="tags"
                  value={tag}
                  key={Math.random()}
                />
                <Tag key={tag} size="lg" variant="subtle" colorScheme="purple">
                  <TagLabel py="5px">{tag}</TagLabel>
                  <TagCloseButton onClick={() => removeTag(tag)} />
                </Tag>
              </>
            ))}
          </HStack>
          <HStack spacing={4} mb="20px">
            <Input
              type="text"
              placeholder="Add tags..."
              focusBorderColor="primary.400"
              borderColor={"textColor.800"}
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
        </FormControl>

        <Button color="textColor.400" bgColor="bgColor.400" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export async function createAction({ request }) {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    tags: data.getAll("tags"),
  };

  console.log(task);

  return redirect("/");
}

export default Create;
