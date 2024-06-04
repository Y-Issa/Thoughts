import { SettingsIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import UpdateInfoForm from "./UpdateInfoForm";

function UpdateProfileInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        color="textColor.100"
        borderColor="textColor.100"
        _hover={{
          bg: "primary.400",
          color: "white",
          borderColor: "primary.400",
        }}
        leftIcon={<SettingsIcon />}
      >
        Edit Account
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent bgColor="bgColor.100" color="textColor.100">
          <ModalHeader fontSize="24px">Edit Account Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdateInfoForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateProfileInfo;
