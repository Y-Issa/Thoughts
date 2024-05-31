import { SimpleGrid } from "@chakra-ui/react";
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
          <TaskCard key={task.id} task={task} scrollbarStyle={scrollbarStyle} />
        ))}
    </SimpleGrid>
  );
}

export async function tasksLoader() {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
}

export default Dashboard;
