import { Box, Button, HStack, Spacer, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useHttpClient } from "../../hooks/httpHook";
import { useAuth } from "../../contexts/AuthContext";
import StyledInput from "../StyledInput";

function LoginForm() {
  const toast = useToast();

  const { isLoading, localError, fetchData, clearError } = useHttpClient();
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
      login(responseData.user.id, responseData.user);
    } catch (err) {
    } finally {
      toast({
        title: localError.current ? localError.current : "Logged In",
        description: localError.current
          ? ""
          : "You have been logged in succefully.",
        duration: 3000,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });
      localError.current = null;
      clearError();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Box maxW="400px" px="20px" pb="10px">
        {}
        <StyledInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          isRequired={true}
          isDisabled={isLoading}
        />

        <StyledInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          isRequired={true}
          isDisabled={isLoading}
        />

        <HStack>
          <Button
            color="white"
            bgColor="primary.400"
            type="submit"
            disabled={isLoading}
            _hover={{ bgColor: "primary.200" }}
          >
            Login
          </Button>
          <Spacer />
          <Button
            color="white"
            bgColor="primary.400"
            onClick={toggleLoginMode}
            disabled={isLoading}
            _hover={{ bgColor: "primary.200" }}
          >
            SignUp?
          </Button>
        </HStack>
      </Box>
    </Form>
  );
}

export default LoginForm;
