import {
  Avatar,
  Box,
  Button,
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
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

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
              <Button
                variant="ghost"
                color="textColor.200"
                _hover={{ bg: "bgColor.200" }}
                onClick={() => onDelete(idea.id)}
              >
                <DeleteIcon />
              </Button>
            </>
          )}
        </Flex>
      </CardHeader>

      <CardBody
        color="textColor.300"
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
        <Text>{idea.description}</Text>
      </CardBody>

      <Divider borderColor="textColor.900" />

      <CardFooter>
        <HStack>
          <Button
            variant="ghost"
            color="textColor.200"
            leftIcon={<ViewIcon />}
            _hover={{ bg: "bgColor.200" }}
          >
            Watch
          </Button>
          <Button
            variant="ghost"
            color="textColor.200"
            leftIcon={<EditIcon />}
            _hover={{ bg: "bgColor.200" }}
          >
            Comment
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default IdeaCard;
