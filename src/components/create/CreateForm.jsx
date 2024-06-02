import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";

import CreateTagInput from "./CreateTagInput";
import TagList from "./TagList";
import { useState } from "react";
import { useHttpClient } from "../../hooks/httpHook";
import { useAuth } from "../../contexts/AuthContext";

function CreateForm() {
  const toast = useToast();
  const navigate = useNavigate();

  const { fetchData, localError } = useHttpClient();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetchData(
        "http://localhost:8001/api/ideas/",
        "POST",
        JSON.stringify({
          title,
          description,
          tags,
          creator: user.id,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {
    } finally {
      toast({
        title: localError.current ? localError.current : "Idea Created",
        description: localError.current
          ? ""
          : "You have created a idea successfully.",
        duration: 3000,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });
      if (!localError.current) navigate("/");
      localError.current = null;
    }
  }

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
