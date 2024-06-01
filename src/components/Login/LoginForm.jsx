import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { useHttpClient } from "../../hooks/httpHook";
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
  const toast = useToast();

  const { isLoading, error, fetchData, clearError } = useHttpClient();
  const { login, isLoggedIn, userId } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function showToast() {
    toast({
      title: "Logged In",
      description: "You have been logged in succefully.",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  }

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 3300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error, clearError]);

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
      login(responseData.user.id, responseData.user);
      console.log(responseData);
      showToast();
    } catch (err) {}
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Box maxW="400px" px="20px" pb="10px">
        {error && (
          <Box
            color="white"
            bgColor="red.400"
            p="10px"
            borderRadius="5px"
            mb="20px"
          >
            {error}
          </Box>
        )}
        <FormControl mb="25px">
          <FormLabel>Email:</FormLabel>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            focusBorderColor="primary.400"
            borderColor="textColor.800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mb="25px">
          <FormLabel>Password:</FormLabel>
          <Input
            isRequired
            type="password"
            name="password"
            placeholder="Password"
            focusBorderColor="primary.400"
            borderColor="textColor.800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button
          color="white"
          bgColor="primary.400"
          type="submit"
          disabled={isLoading}
        >
          Login
        </Button>
      </Box>
    </Form>
  );
}

export default LoginForm;
