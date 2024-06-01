import { Box, Button, HStack, Spacer, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import StyledInput from "../StyledInput";
import { useHttpClient } from "../../hooks/httpHook";

function SignupForm() {
  const { toggleLoginMode, login } = useAuth();
  const { isLoading, localError, fetchData, clearError } = useHttpClient();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const responseData = await fetchData(
        "http://localhost:8001/api/user/signup",
        "POST",
        JSON.stringify({
          name,
          email,
          password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      login(responseData.userId, responseData.user);
    } catch (err) {
    } finally {
      toast({
        title: localError.current ? localError.current : "Signed Up",
        description: localError.current
          ? ""
          : "You have been signed up succefully.",
        duration: 3000,
        isClosable: true,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });
      localError.current = null;
      clearError();
      toggleLoginMode();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Box maxW="400px" px="20px" pb="10px">
        <StyledInput
          label="Name"
          type="input"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          isRequired={true}
          isDisabled={isLoading}
        />
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
          placeholder="Password (min. 6 characters)"
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
            Signup
          </Button>
          <Spacer />
          <Button
            color="white"
            bgColor="primary.400"
            onClick={toggleLoginMode}
            disabled={isLoading}
            _hover={{ bgColor: "primary.200" }}
          >
            Login?
          </Button>
        </HStack>
      </Box>
    </Form>
  );
}

export default SignupForm;
