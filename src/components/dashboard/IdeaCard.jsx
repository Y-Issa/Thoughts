import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import ConfirmDeleteModal from "../profile/ConfirmDeleteModal";
import TagsDisplay from "./TagsDisplay";
import CommentPopover from "./CommentPopover";
import ViewDetails from "./ViewDetails";

function IdeaCard({ idea, canBeDeleted, onDelete }) {
  return (
    <Card
      key={idea.id}
      borderTop="8px"
      borderColor="primary.400"
      bg="bgColor.50"
      maxH="390px"
      maxW={{ md: "581px" }}
    >
      <CardHeader>
        <Flex gap={5}>
          <Avatar src={idea.img} />
          <Box color="textColor.50">
            <Heading as="h3" size="sm">
              {idea.title}
            </Heading>
            <Text>by {idea.creator.name}</Text>
          </Box>
          {canBeDeleted && (
            <>
              <Spacer />
              <ConfirmDeleteModal onDelete={onDelete} idea={idea} />
            </>
          )}
        </Flex>
      </CardHeader>

      <CardBody
        color="textColor.300"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        maxH="210px"
      >
        <Box
          mb={4}
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "lightgray",
              borderRadius: "24px",
            },
          }}
        >
          <Text>
            {idea.description.length > 180
              ? idea.description.substring(0, 180) + "..."
              : idea.description}
          </Text>
        </Box>
        <TagsDisplay tags={idea.tags} />
      </CardBody>

      <Divider borderColor="textColor.900" />

      <CardFooter>
        <HStack>
          <ViewDetails idea={idea} />
          <CommentPopover ideaId={idea.id} />
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default IdeaCard;
