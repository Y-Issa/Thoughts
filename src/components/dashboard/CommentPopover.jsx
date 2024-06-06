import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CommentForm from "./CommentForm";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";

function CommentPopover({ ideaId }) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const initialFocusRef = useRef(null);

  const { isLoggedIn } = useAuth();
  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={initialFocusRef}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button
          variant="ghost"
          color="textColor.200"
          leftIcon={<EditIcon />}
          _hover={{ bg: "bgColor.200" }}
        >
          Comment
        </Button>
      </PopoverTrigger>
      <PopoverContent bgColor="bgColor.100" borderColor="bgColor.100">
        <PopoverArrow bgColor="bgColor.100" />
        <PopoverCloseButton color="textColor.100" />
        <PopoverHeader color="textColor.100">Comment</PopoverHeader>
        <PopoverBody>
          {isLoggedIn ? (
            <CommentForm onClose={onClose} ideaId={ideaId} />
          ) : (
            <Text color="textColor.100" my="20px">
              Please login to comment.
            </Text>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default CommentPopover;
