import {
  Button,
  Flex,
  FormControl,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { useHttpClient } from "../../hooks/httpHook";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

function CommentForm({ onClose, ideaId }) {
  const toast = useToast();
  const [comment, setComment] = useState("");

  const { user, token } = useAuth();
  const { fetchData, localError, isLoading } = useHttpClient();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetchData(
        `http://localhost:8001/api/ideas/${ideaId}/comment`,
        "POST",
        JSON.stringify({ content: comment, creator: user.id }),
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      );
    } catch (err) {
      // error handled in the httpHook
    } finally {
      toast({
        title: localError.current ? localError.current : "Commented",
        description: localError.current
          ? "Please try again."
          : "Your comment has been added.",
        duration: 3000,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });
      if (!localError.current) {
        onClose();
      }
      localError.current = null;
      setComment("");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl mb="0px">
        <Textarea
          name="comment"
          placeholder="Write a comment..."
          focusBorderColor="primary.400"
          borderColor="textColor.800"
          color="textColor.100"
          maxH="40px"
          isRequired
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={isLoading}
        />
        <Flex justify="flex-end" mt="10px">
          <Button
            mr="10px"
            variant="outline"
            color="textColor.100"
            borderColor="textColor.700"
            _hover={{ bgColor: "bgColor.200" }}
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            color="white"
            bgColor="primary.400"
            type="submit"
            _hover={{ bgColor: "primary.200" }}
            disabled={isLoading}
          >
            Comment
          </Button>
        </Flex>
      </FormControl>
    </Form>
  );
}

export default CommentForm;
