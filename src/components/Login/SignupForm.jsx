import { Box, Button, HStack, Spacer } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import StyledInput from "../StyledInput";
import useSignup from "../../hooks/useSignup";

function SignupForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleSubmit,
    toggleLoginMode,
  } = useSignup();

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
