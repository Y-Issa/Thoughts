import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHttpClient } from "./httpHook";
import { useToast } from "@chakra-ui/react";

function useUserPosts() {
  const toast = useToast();

  const { userId, token } = useAuth();
  const { fetchData, localError } = useHttpClient();

  const [loadedIdeas, setLoadedIdeas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchPosts() {
        try {
          const responseData = await fetchData(
            `http://localhost:8001/api/ideas/user/${userId}`
          );
          setLoadedIdeas(responseData.ideas);
        } catch (err) {
          setError(err);
        }
      }
      fetchPosts();
    },
    [fetchData, userId]
  );

  async function handleDelete(id) {
    try {
      await fetchData(`http://localhost:8001/api/ideas/${id}`, "DELETE", null, {
        Authorization: `Bearer ${token}`,
      });
    } catch (err) {
      setError(err);
    } finally {
      toast({
        title: localError.current ? "An error have occured" : "Idea deleted.",
        description: localError.current
          ? "The idea will not be deleted. Please try again."
          : "You have deleted the idea successfully.",
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
        duration: 3000,
      });
      setLoadedIdeas(loadedIdeas.filter((idea) => idea.id !== id));

      localError.current = null;
    }
  }

  return { loadedIdeas, error, handleDelete };
}

export default useUserPosts;
