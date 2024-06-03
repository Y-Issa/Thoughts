import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHttpClient } from "./httpHook";

function useUserPosts() {
  const { userId } = useAuth();
  const { fetchData } = useHttpClient();

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

  return { loadedIdeas, error };
}

export default useUserPosts;
