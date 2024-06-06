import { Button, Flex, FormControl, Textarea } from "@chakra-ui/react";
import { Form } from "react-router-dom";

import { useCommentForm } from "../../hooks/useComments";

function CommentForm({ onClose, ideaId }) {
  const { comment, setComment, handleSubmit, isLoading } = useCommentForm(
    ideaId,
    onClose
  );

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
