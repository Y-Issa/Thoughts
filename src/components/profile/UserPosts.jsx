import { Box, SimpleGrid } from "@chakra-ui/react";
import IdeaCard from "../dashboard/IdeaCard";
import useUserPosts from "../../hooks/useUserPosts";
import NoUserPostsYet from "./NoUserPostsYet";

function UserPosts() {
  const { loadedIdeas, handleDelete } = useUserPosts();
  console.log(loadedIdeas);

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
      <SimpleGrid
        spacing={10}
        minChildWidth="275px"
        px={{ base: "5px", md: "25px" }}
      >
        {loadedIdeas.length > 0 ? (
          loadedIdeas?.map((idea) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              canBeDeleted={true}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <NoUserPostsYet />
        )}
      </SimpleGrid>
    </Box>
  );
}

export default UserPosts;
