import { Box, Button } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import StyledInput from "../StyledInput";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHttpClient } from "../../hooks/httpHook";

function UpdateInfoForm() {
  const { user, login } = useAuth();
  const { fetchData } = useHttpClient();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const responseData = await fetchData(
        `http://localhost:8001/api/user/${user.id}`,
        "PATCH",
        JSON.stringify({
          name,
          bio,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(responseData);
      login(responseData.user.id, responseData.user);
    } catch (err) {}
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Box px="30px" pb="15px">
        <StyledInput
          label="Name"
          type="input"
          placeholder="Updated Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          label="Bio"
          type="input"
          placeholder="Updated Bio"
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Button
          mb={0}
          color="white"
          bgColor="primary.400"
          type="submit"
          _hover={{ bgColor: "primary.200" }}
        >
          Update
        </Button>
      </Box>
    </Form>
  );
}

export default UpdateInfoForm;
