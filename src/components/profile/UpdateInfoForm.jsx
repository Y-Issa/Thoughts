import { Box, Button } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import StyledInput from "../StyledInput";

import useUpdateInfo from "../../hooks/useUpdateInfo";

function UpdateInfoForm({ onClose }) {
  const {
    name,
    setName,
    bio,
    setBio,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    handleSubmit,
    isLoading,
  } = useUpdateInfo(onClose);

  return (
    <Form onSubmit={handleSubmit}>
      <Box px="30px" py="15px">
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
          _hover={{ bgColor: "primary.200" }}
          type="submit"
          disabled={isLoading}
        >
          Update
        </Button>
      </Box>
    </Form>
  );
}

export default UpdateInfoForm;
