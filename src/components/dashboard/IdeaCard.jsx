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
  Text,
} from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { useHttpClient } from "../../hooks/httpHook";
import { useEffect, useState } from "react";

function IdeaCard({ idea, scrollbarStyle }) {
  const { fetchData, localError } = useHttpClient();
  const [owner, setOwner] = useState({});

  useEffect(
    function () {
      async function fetchUser() {
        try {
          const responseData = await fetchData(
            `http://localhost:8001/api/user/${idea.creator}`,
            "GET"
          );
          setOwner(responseData.user);
        } catch {}
      }
      fetchUser();
    },
    [fetchData, idea.creator]
  );

  return (
    <Card
      key={idea.id}
      borderTop="8px"
      borderColor="primary.400"
      bg="bgColor.50"
      maxH="390px"
      maxW={{ md: "748px" }}
    >
      <CardHeader>
        <Flex gap={5}>
          <Avatar src={idea.img} />
          <Box color="textColor.50">
            <Heading as="h3" size="sm">
              {idea.title}
            </Heading>
            <Text>by {owner.name}</Text>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody color="textColor.300" overflowY="scroll" css={scrollbarStyle}>
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
