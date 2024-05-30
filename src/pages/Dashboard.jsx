import { EditIcon, ViewIcon } from "@chakra-ui/icons";
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
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

const scrollbarStyle = {
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
};

function Dashboard() {
  const tasks = useLoaderData(tasksLoader);

  return (
    <SimpleGrid
      spacing={10}
      minChildWidth="275px"
      overflowY="scroll"
      h="77vh"
      px="5px"
      css={scrollbarStyle}
    >
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="primary.400"
            bg="bgColor.50"
            maxH="390px"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box color="textColor.50">
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody
              color="textColor.300"
              overflowY="scroll"
              css={scrollbarStyle}
            >
              <Text>{task.description}</Text>
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
        ))}
    </SimpleGrid>
  );
}

export async function tasksLoader() {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
}

export default Dashboard;
