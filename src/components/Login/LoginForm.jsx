import { Box, Button, HStack, Spacer } from "@chakra-ui/react";
import { Form } from "react-router-dom";

import StyledInput from "../StyledInput";
import useLogin from "../../hooks/useLogin";

function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleSubmit,
    toggleLoginMode,
  } = useLogin();

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
