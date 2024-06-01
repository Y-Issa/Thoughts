import { Box, SimpleGrid } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

import TaskCard from "../components/dashboard/TaskCard";

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
  const { ideas } = useLoaderData(tasksLoader);

  return (
    <Box h="79vh" overflowY="scroll" css={scrollbarStyle}>
      <SimpleGrid spacing={10} minChildWidth="275px" px="25px">
        {ideas &&
          ideas.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              scrollbarStyle={scrollbarStyle}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export async function tasksLoader() {
  const res = await fetch("http://localhost:8001/api/ideas/");
  return res.json();
}

export default Dashboard;
