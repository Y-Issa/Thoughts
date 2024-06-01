import { useCallback, useState } from "react";

export function useHttpClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async function (
    url,
    method = "GET",
    body = null,
    headers = {}
  ) {
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      return responseData;
    } catch (err) {
      setError(err.message || "Something went wrong, please try again later.");
    } finally {
      setIsLoading(false);
    }
  },
  []);

  function clearError() {
    setError(null);
  }

  return { isLoading, error, fetchData, clearError };
}
