import { Box, Button, useToast } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import StyledInput from "../StyledInput";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHttpClient } from "../../hooks/httpHook";

function UpdateInfoForm({ onClose }) {
  const { user, login } = useAuth();
  const { fetchData, localError } = useHttpClient();
  const toast = useToast();

  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let responseData;
    try {
      responseData = await fetchData(
        `http://localhost:8001/api/user/${user.id}`,
        "PATCH",
        JSON.stringify({
          name,
          bio,
          oldPassword,
          newPassword,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {
    } finally {
      onClose();
      toast({
        title: localError.current ? localError.current : "Updated",
        description: localError.current
          ? "Please try again."
          : "Your information has been updated.",
        duration: 3000,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });
      if (!localError.current) {
        login(user.id, responseData.user);
      }
    }
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
          placeholder="Updated Bio (optional)"
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <StyledInput
          label="Old Password"
          type="password"
          placeholder="Old Password (required)"
          name="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <StyledInput
          label="New Password"
          type="password"
          placeholder="New Password (optional)"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
