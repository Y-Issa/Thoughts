import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import CommentBox from "./CommentBox";
import { useComments } from "../../hooks/useComments";

function ViewDetails({ idea }) {
  const { isOpen, onOpen, onClose, btnRef, comments } = useComments(idea);

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="textColor.200"
        leftIcon={<ViewIcon />}
        _hover={{ bg: "bgColor.200" }}
      >
        View
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="md"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="bgColor.100">
          <DrawerCloseButton color="textColor.100" />
          <DrawerHeader color="textColor.100">
            {idea.title}
            <Text fontSize="14px">by {idea.creator.name}</Text>
          </DrawerHeader>
          <DrawerBody
            sx={{
              "&::-webkit-scrollbar": {
                width: "16px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
                borderRadius: "8px",
              },
            }}
          >
            <Flex justifyContent="space-between" direction="column" gap={4}>
              <Text color="textColor.100">{idea.description}</Text>
              {comments.map((comment) => (
                <CommentBox key={comment._id} comment={comment} />
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ViewDetails;
