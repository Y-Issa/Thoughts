import { Box, SimpleGrid } from "@chakra-ui/react";
import IdeaCard from "../dashboard/IdeaCard";
import useUserPosts from "../../hooks/getUserPosts";

function UserPosts() {
  const { loadedIdeas, error } = useUserPosts();

  return (
    <Box
      h="60vh"
      pt="5px"
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
      <SimpleGrid spacing={10} minChildWidth="275px" px="25px">
        {loadedIdeas &&
          loadedIdeas?.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} canBeDeleted={true} />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default UserPosts;
