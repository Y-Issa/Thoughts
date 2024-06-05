import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useHttpClient } from "./httpHook";
import { useAuth } from "../contexts/AuthContext";

function useLogin() {
  const toast = useToast();
  const { isLoading, localError, fetchData } = useHttpClient();
  const { login, toggleLoginMode } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const responseData = await fetchData(
        "http://localhost:8001/api/user/login",
        "POST",
        JSON.stringify({
          email,
          password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      login(responseData.user.id, responseData.user, responseData.token);
      if (!localError.current) {
        localStorage.setItem("user", JSON.stringify(responseData));
      }
    } catch (err) {
      // error handled in the httpHook
    } finally {
      toast({
        title: localError.current ? localError.current : "Logged In",
        description: localError.current
          ? ""
          : "You have been logged in successfully.",
        duration: 3000,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });
      localError.current = null;
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleSubmit,
    toggleLoginMode,
  };
}

export default useLogin;
