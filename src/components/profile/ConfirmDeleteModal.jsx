import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";

function ConfirmDeleteModal({ onDelete, idea }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="ghost"
        color="textColor.200"
        _hover={{ bg: "bgColor.200" }}
        onClick={onOpen}
      >
        <DeleteIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
        <ModalOverlay />
        <ModalContent
          bgColor="bgColor.100"
          color="textColor.100"
          p={{ base: "10px", lg: "15px" }}
        >
          <ModalHeader>
            Are you sure you wish to delete: {idea.title}
          </ModalHeader>
          <ModalBody>
            <HStack>
              <Button
                colorScheme="red"
                onClick={() => {
                  onDelete(idea.id);
                  onClose();
                }}
              >
                Yes
              </Button>
              <Spacer />
              <Button
                onClick={onClose}
                color="textColor.100"
                bgColor="bgColor.200"
                _hover={{ bg: "bgColor.300" }}
              >
                No
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmDeleteModal;
