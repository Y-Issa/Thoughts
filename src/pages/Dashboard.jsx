import { Box, SimpleGrid, Spinner, Center } from "@chakra-ui/react";
import { useLoaderData, useNavigation } from "react-router-dom";

import IdeaCard from "../components/dashboard/IdeaCard";
import NoContent from "../components/dashboard/NoContent";

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
  const { ideas } = useLoaderData(ideasLoader);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <Center h="79vh">
        <Spinner size="xl" color="primary.400" />
      </Center>
    );
  }

  return (
    <>
      {(!ideas?.ideas || ideas?.ideas?.length === 0) && <NoContent />}
      <Box h="79vh" overflowY="scroll" css={scrollbarStyle} overflowX="hidden">
        <SimpleGrid spacing={10} minChildWidth="275px" px="25px">
          {ideas &&
            ideas?.ideas?.map((idea) => <IdeaCard key={idea.id} idea={idea} />)}
        </SimpleGrid>
      </Box>
    </>
  );
}

export async function ideasLoader() {
  try {
    const res = await fetch(
      "https://thoughts-backend-4tsi.onrender.com/api/ideas/"
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch ideas.");
    }

    return { ideas: data, error: null };
  } catch (err) {
    return { ideas: [], error: err.message };
  }
}

export default Dashboard;
