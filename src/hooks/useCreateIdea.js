import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "./httpHook";
import { useAuth } from "../contexts/AuthContext";

function useCreateIdea() {
  const toast = useToast();
  const navigate = useNavigate();
  const { fetchData, localError, isLoading } = useHttpClient();
  const { user, token } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (token === null) {
      return;
    }
    try {
      await fetchData(
        "https://thoughts-backend-4tsi.onrender.com/api/ideas/",
        "POST",
        JSON.stringify({
          title,
          description,
          tags,
          creator: user.id,
        }),
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      );
    } catch (err) {
      // error handled in the httpHook
    } finally {
      toast({
        title: localError.current ? localError.current : "Idea Created",
        description: localError.current
          ? ""
          : "You have created an idea successfully.",
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
    if (
      currentTag === "" ||
      currentTag.trim() === "" ||
      tags.includes(currentTag)
    ) {
      setCurrentTag("");
      return;
    }
    setTags([...tags, currentTag]);
    setCurrentTag("");
  }

  function removeTag(tag) {
    setTags(tags.filter((t) => t !== tag));
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    tags,
    setTags,
    currentTag,
    setCurrentTag,
    handleSubmit,
    addTag,
    removeTag,
    isLoading,
  };
}

export default useCreateIdea;
