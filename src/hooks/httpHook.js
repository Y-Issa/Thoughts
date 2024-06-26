import { useCallback, useRef, useState } from "react";

export function useHttpClient() {
  const [isLoading, setIsLoading] = useState(false);
  const localError = useRef(null);

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
      localError.current = err.message || "Something went wrong.";
    } finally {
      setIsLoading(false);
    }
  },
  []);

  return { isLoading, localError, fetchData };
}
