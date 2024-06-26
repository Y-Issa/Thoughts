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
import LoginForm from "./LoginForm";
import { useAuth } from "../../contexts/AuthContext";
import SignupForm from "./SignupForm";

function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoginMode } = useAuth();

  return (
    <>
      <Button
        onClick={onOpen}
        bgColor="primary.400"
        color="white"
        _hover={{ bgColor: "primary.300" }}
        variant="ghost"
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="bgColor.100" color="textColor.100">
          {isLoginMode ? (
            <>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <LoginForm />
              </ModalBody>
            </>
          ) : (
            <>
              <ModalHeader>Signup</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <SignupForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;
